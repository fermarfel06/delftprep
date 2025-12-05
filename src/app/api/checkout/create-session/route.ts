import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { getStripe, TIER_DURATIONS } from "@/lib/stripe"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    // Authenticate user
    const session = await auth()

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized - Please log in" },
        { status: 401 }
      )
    }

    const { priceId, tier } = await req.json()

    if (!priceId || !tier) {
      return NextResponse.json(
        { error: "Missing required fields: priceId and tier" },
        { status: 400 }
      )
    }

    // Validate tier
    if (!["starter", "enhanced", "complete", "tutoring"].includes(tier)) {
      return NextResponse.json(
        { error: "Invalid tier" },
        { status: 400 }
      )
    }

    // Get duration for this tier (or set tutoring-specific metadata)
    let metadata: Record<string, string>

    if (tier === "tutoring") {
      // Tutoring has different metadata
      metadata = {
        userId: session.user.id,
        type: "tutoring",
        sessions: "5",
        validityMonths: "6",
      }
    } else {
      const duration = TIER_DURATIONS[tier as keyof typeof TIER_DURATIONS]
      metadata = {
        userId: session.user.id,
        tier: tier,
        duration: duration.toString(),
      }
    }

    // Create Stripe checkout session
    const stripe = getStripe()
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXTAUTH_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: tier === "tutoring" ? `${process.env.NEXTAUTH_URL}/tutoring` : `${process.env.NEXTAUTH_URL}/pricing`,
      customer_email: session.user.email,
      metadata: metadata,
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Checkout session creation error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}

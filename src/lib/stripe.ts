import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined in environment variables")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-11-17.clover",
  typescript: true,
})

// Price IDs mapping (will be added to .env after creating products)
export const PRICE_IDS = {
  starter: process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER || "",
  enhanced: process.env.NEXT_PUBLIC_STRIPE_PRICE_ENHANCED || "",
  complete: process.env.NEXT_PUBLIC_STRIPE_PRICE_COMPLETE || "",
  tutoring: process.env.NEXT_PUBLIC_STRIPE_PRICE_TUTORING_PACK_5 || "",
} as const

// Duration mapping for each tier (in months)
export const TIER_DURATIONS = {
  starter: 6,
  enhanced: 12,
  complete: 18,
} as const

export type PriceTier = keyof typeof PRICE_IDS

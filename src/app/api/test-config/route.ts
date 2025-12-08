import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  const diagnostics = {
    timestamp: new Date().toISOString(),
    environment: {
      NEXTAUTH_URL: {
        exists: !!process.env.NEXTAUTH_URL,
        value: process.env.NEXTAUTH_URL ? `${process.env.NEXTAUTH_URL.substring(0, 20)}...` : "MISSING",
        startsWithHttps: process.env.NEXTAUTH_URL?.startsWith("https://"),
        hasTrailingSlash: process.env.NEXTAUTH_URL?.endsWith("/"),
      },
      NEXTAUTH_SECRET: {
        exists: !!process.env.NEXTAUTH_SECRET,
        length: process.env.NEXTAUTH_SECRET?.length || 0,
        isLongEnough: (process.env.NEXTAUTH_SECRET?.length || 0) >= 32,
      },
      DATABASE_URL: {
        exists: !!process.env.DATABASE_URL,
        startsWithPostgresql: process.env.DATABASE_URL?.startsWith("postgresql://"),
        hasPassword: process.env.DATABASE_URL?.includes(":") && process.env.DATABASE_URL?.includes("@"),
      },
      GOOGLE_CLIENT_ID: {
        exists: !!process.env.GOOGLE_CLIENT_ID,
        configured: !!process.env.GOOGLE_CLIENT_ID && !!process.env.GOOGLE_CLIENT_SECRET,
      },
      STRIPE_SECRET_KEY: {
        exists: !!process.env.STRIPE_SECRET_KEY,
        startsWithSk: process.env.STRIPE_SECRET_KEY?.startsWith("sk_"),
      },
    },
    recommendations: [] as string[],
  }

  // Add recommendations based on diagnostics
  if (!diagnostics.environment.NEXTAUTH_URL.exists) {
    diagnostics.recommendations.push("❌ CRITICAL: NEXTAUTH_URL is missing!")
  } else if (!diagnostics.environment.NEXTAUTH_URL.startsWithHttps) {
    diagnostics.recommendations.push("❌ CRITICAL: NEXTAUTH_URL must start with https://")
  } else if (diagnostics.environment.NEXTAUTH_URL.hasTrailingSlash) {
    diagnostics.recommendations.push("⚠️  NEXTAUTH_URL should not have a trailing slash")
  } else {
    diagnostics.recommendations.push("✅ NEXTAUTH_URL looks good")
  }

  if (!diagnostics.environment.NEXTAUTH_SECRET.exists) {
    diagnostics.recommendations.push("❌ CRITICAL: NEXTAUTH_SECRET is missing!")
  } else if (!diagnostics.environment.NEXTAUTH_SECRET.isLongEnough) {
    diagnostics.recommendations.push("❌ CRITICAL: NEXTAUTH_SECRET is too short (needs 32+ chars)")
  } else {
    diagnostics.recommendations.push("✅ NEXTAUTH_SECRET looks good")
  }

  if (!diagnostics.environment.DATABASE_URL.exists) {
    diagnostics.recommendations.push("❌ CRITICAL: DATABASE_URL is missing!")
  } else if (!diagnostics.environment.DATABASE_URL.startsWithPostgresql) {
    diagnostics.recommendations.push("❌ DATABASE_URL must start with postgresql://")
  } else if (!diagnostics.environment.DATABASE_URL.hasPassword) {
    diagnostics.recommendations.push("⚠️  DATABASE_URL might be malformed (can't find password)")
  } else {
    diagnostics.recommendations.push("✅ DATABASE_URL looks good")
  }

  if (!diagnostics.environment.GOOGLE_CLIENT_ID.configured) {
    diagnostics.recommendations.push("ℹ️  Google OAuth not configured (optional)")
  } else {
    diagnostics.recommendations.push("✅ Google OAuth configured")
  }

  if (!diagnostics.environment.STRIPE_SECRET_KEY.exists) {
    diagnostics.recommendations.push("⚠️  STRIPE_SECRET_KEY is missing (needed for payments)")
  } else if (!diagnostics.environment.STRIPE_SECRET_KEY.startsWithSk) {
    diagnostics.recommendations.push("⚠️  STRIPE_SECRET_KEY should start with sk_")
  } else {
    diagnostics.recommendations.push("✅ STRIPE_SECRET_KEY looks good")
  }

  return NextResponse.json(diagnostics, { status: 200 })
}

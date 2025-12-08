import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export const runtime = "nodejs"

export async function GET() {
  const results = {
    timestamp: new Date().toISOString(),
    databaseConnection: {
      status: "unknown",
      error: null as string | null,
      details: null as any,
    },
    prismaClient: {
      exists: false,
      canQuery: false,
    },
  }

  try {
    // Check if Prisma client is initialized
    results.prismaClient.exists = !!prisma

    // Try a simple query
    const userCount = await prisma.user.count()

    results.databaseConnection.status = "connected"
    results.prismaClient.canQuery = true
    results.databaseConnection.details = {
      userCount,
      message: "Successfully connected to database",
    }
  } catch (error) {
    results.databaseConnection.status = "failed"
    results.databaseConnection.error = error instanceof Error ? error.message : String(error)
    results.databaseConnection.details = {
      errorName: error instanceof Error ? error.name : "Unknown",
      errorStack: error instanceof Error ? error.stack : null,
    }
  }

  return NextResponse.json(results, { status: 200 })
}

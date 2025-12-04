import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      subscriptionStatus: string
      currentPeriodEnd: Date | null
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    subscriptionStatus: string
    currentPeriodEnd: Date | null
  }
}

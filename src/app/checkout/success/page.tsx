"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate verification (in production, verify session server-side)
    if (sessionId) {
      setTimeout(() => setLoading(false), 1500);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Verifying your payment...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!sessionId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Header />
        <div className="container max-w-2xl mx-auto px-4 py-16">
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">Invalid Session</CardTitle>
              <CardDescription>
                No session ID found. Please return to the pricing page and try again.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/pricing">Return to Pricing</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />

      <div className="container max-w-3xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardHeader className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-6xl">✓</span>
              </motion.div>
              <CardTitle className="text-3xl font-bold text-green-600">
                Payment Successful!
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Welcome to DelftPrep! Your subscription is now active.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold text-lg mb-4">What happens next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <div>
                      <p className="font-medium">Instant Access</p>
                      <p className="text-sm text-muted-foreground">
                        You can now access all practice problems and features
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <div>
                      <p className="font-medium">Confirmation Email</p>
                      <p className="text-sm text-muted-foreground">
                        Check your inbox for your receipt and account details
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <div>
                      <p className="font-medium">Start Learning</p>
                      <p className="text-sm text-muted-foreground">
                        Head to your dashboard to begin your preparation journey
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-lg mb-2">🎯 Ready to start?</h3>
                <p className="text-muted-foreground mb-4">
                  Your personalized dashboard is waiting with curated problems and progress tracking.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="flex-1">
                    <Link href="/dashboard">Go to Dashboard →</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="flex-1">
                    <Link href="/problems">Browse Problems</Link>
                  </Button>
                </div>
              </div>

              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">
                  Need help getting started?
                </p>
                <Button asChild variant="link">
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Session ID: {sessionId.slice(0, 20)}...
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <Header />
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
          <Footer />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}

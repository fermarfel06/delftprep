"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />

      <div className="container max-w-2xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
            <CardHeader className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-6xl">⚠️</span>
              </motion.div>
              <CardTitle className="text-3xl font-bold text-orange-600">
                Payment Cancelled
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Your checkout was cancelled. No charges were made.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-lg mb-4">What happened?</h3>
                <p className="text-muted-foreground mb-4">
                  You closed the payment window or clicked the back button during checkout.
                  Don't worry - your account is still active and you can try again anytime.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">•</span>
                    No payment was processed
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">•</span>
                    Your card was not charged
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-600">•</span>
                    You can return to pricing and try again
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-lg mb-2">💡 Still interested?</h3>
                <p className="text-muted-foreground mb-4">
                  Join hundreds of students who have successfully prepared for TU Delft with DelftPrep.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="flex-1">
                    <Link href="/pricing">View Pricing Again →</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="flex-1">
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              </div>

              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">
                  Have questions or need assistance?
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button asChild variant="link">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <Button asChild variant="link">
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

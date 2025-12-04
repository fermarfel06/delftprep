"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { forgotPassword } from "@/lib/api/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      await forgotPassword(email);
      setSuccess(true);
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
          {/* Left Side - Hero Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden"
          >
            {/* Animated Background Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

            <div className="relative z-10 space-y-8">
              {/* Welcome Message */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-6xl">🔑</span>
                  <h1 className="text-5xl font-bold">Reset Password</h1>
                </div>
                <p className="text-xl opacity-90 max-w-md">
                  No worries! We'll help you get back to your studies in no time
                </p>
              </div>

              {/* Help Steps */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">How it works:</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Enter your email</p>
                      <p className="text-sm opacity-80">
                        Provide the email address you used to register
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Check your inbox</p>
                      <p className="text-sm opacity-80">
                        We'll send you a secure reset link via email
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Create new password</p>
                      <p className="text-sm opacity-80">
                        Click the link and set up your new password
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔒</span>
                  <h4 className="font-semibold text-lg">Security Notice</h4>
                </div>
                <p className="text-sm opacity-90">
                  The reset link will expire in 1 hour for security reasons. If you didn't request this reset, you can safely ignore this email.
                </p>
              </div>

              {/* Support Info */}
              <div className="space-y-2">
                <p className="text-sm opacity-80">Need help?</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 border-white/30"
                    >
                      Contact Support
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 hover:bg-white/10"
                    >
                      Back to Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Reset Form */}
          <div className="flex items-center justify-center p-8 bg-gradient-to-b from-emerald-50/30 to-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md"
            >
              <Card className="border-2 shadow-xl">
                <CardHeader className="space-y-2 text-center pb-8">
                  <CardTitle className="text-3xl font-bold">
                    {success ? "Check Your Email!" : "Forgot Password?"}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {success
                      ? "We've sent you a reset link"
                      : "Enter your email to receive a password reset link"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {success ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      {/* Success State */}
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                          <span className="text-5xl">✓</span>
                        </div>
                        <div className="space-y-2">
                          <p className="font-semibold text-lg">Email Sent!</p>
                          <p className="text-sm text-muted-foreground">
                            We've sent a password reset link to:
                          </p>
                          <p className="font-medium text-primary">{email}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">💡</span>
                          <p className="font-semibold text-sm">What to do next:</p>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1 pl-7">
                          <li>• Check your inbox and spam folder</li>
                          <li>• Click the reset link within 1 hour</li>
                          <li>• Create a strong new password</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <Link href="/login">
                          <Button className="w-full h-12 text-base font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                            Back to Sign In →
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          className="w-full h-12 border-2"
                          onClick={() => {
                            setSuccess(false);
                            setEmail("");
                          }}
                        >
                          Send to Different Email
                        </Button>
                      </div>

                      <div className="text-center text-sm text-muted-foreground pt-4">
                        Didn't receive the email?{" "}
                        <button
                          onClick={handleSubmit}
                          className="text-primary hover:underline font-semibold"
                        >
                          Resend
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Email Field */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold">
                          Email Address
                        </Label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            📧
                          </div>
                          <Input
                            id="email"
                            type="email"
                            placeholder="student@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 h-12 border-2 focus-visible:ring-2"
                            required
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Enter the email you used to create your account
                        </p>
                      </div>

                      {/* Error Message */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg text-sm flex items-center gap-2"
                        >
                          <span>⚠️</span>
                          {error}
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full h-12 text-base font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin">⏳</span>
                            Sending reset link...
                          </span>
                        ) : (
                          "Send Reset Link →"
                        )}
                      </Button>

                      {/* Info Box */}
                      <div className="bg-secondary/30 border border-secondary rounded-lg p-4 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-lg">ℹ️</span>
                          <p className="text-muted-foreground">
                            If an account exists with this email, you'll receive a reset link within a few minutes.
                          </p>
                        </div>
                      </div>

                      {/* Sign In Link */}
                      <div className="text-center pt-4">
                        <p className="text-sm text-muted-foreground">
                          Remember your password?{" "}
                          <Link
                            href="/login"
                            className="text-primary hover:underline font-semibold"
                          >
                            Sign in →
                          </Link>
                        </p>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Trust Badge */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>🔒</span>
                  <p>Secure password reset · Your data is protected</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

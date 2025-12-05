"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
        setIsLoading(false);
        return;
      }

      // Success - redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("An error occurred. Please try again.");
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
            className="relative hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden"
          >
            {/* Animated Background Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

            <div className="relative z-10 space-y-8">
              {/* Welcome Message */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-6xl">🚀</span>
                  <h1 className="text-5xl font-bold">Welcome Back!</h1>
                </div>
                <p className="text-xl opacity-90 max-w-md">
                  Continue your journey to TU Delft Aerospace Engineering
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <p className="font-bold text-lg">500+</p>
                    <p className="text-sm opacity-80">Active Students</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-sm opacity-80">Average Rating</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-bold text-lg">87%</p>
                    <p className="text-sm opacity-80">Success Rate</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-300">⭐</span>
                  ))}
                </div>
                <p className="text-lg mb-4 italic">
                  "DelftPrep was instrumental in my preparation. The practice problems and AI analysis helped me identify and strengthen my weak areas."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                    👨‍🎓
                  </div>
                  <div>
                    <p className="font-semibold">Alex M.</p>
                    <p className="text-sm opacity-80">Admitted 2024</p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center">
                    ✓
                  </div>
                  <p>Access to 300+ practice problems</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center">
                    ✓
                  </div>
                  <p>Track your progress in real-time</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center">
                    ✓
                  </div>
                  <p>AI-powered personalized recommendations</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <div className="flex items-center justify-center p-8 bg-gradient-to-b from-blue-50/30 to-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md"
            >
              <Card className="border-2 shadow-xl">
                <CardHeader className="space-y-2 text-center pb-8">
                  <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
                  <CardDescription className="text-base">
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
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
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-semibold">Password</Label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          🔒
                        </div>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 h-12 border-2 focus-visible:ring-2"
                          required
                        />
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="remember"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 rounded border-2 cursor-pointer"
                        />
                        <Label htmlFor="remember" className="text-sm cursor-pointer">
                          Remember me
                        </Label>
                      </div>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        Forgot password?
                      </Link>
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
                      className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin">⏳</span>
                          Signing in...
                        </span>
                      ) : (
                        "Sign In →"
                      )}
                    </Button>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-background text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="h-11 border-2"
                        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                      >
                        <span className="mr-2">🔗</span>
                        Google
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="h-11 border-2"
                        disabled
                      >
                        <span className="mr-2">🐙</span>
                        GitHub
                      </Button>
                    </div>
                    {/* Sign Up Link */}
                    <div className="text-center pt-4">
                      <p className="text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link
                          href="/register"
                          className="text-primary hover:underline font-semibold"
                        >
                          Create one now →
                        </Link>
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Trust Badge */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>🔒</span>
                  <p>Secure login · Your data is protected</p>
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

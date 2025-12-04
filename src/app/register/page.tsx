"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUserStore } from "@/lib/store/userStore";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const { register } = useUserStore();

  // Password strength calculator
  const passwordStrength = useMemo(() => {
    if (!password) return { score: 0, label: "", color: "" };

    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    if (score <= 2) return { score: score * 25, label: "Weak", color: "bg-red-500" };
    if (score <= 3) return { score: score * 25, label: "Fair", color: "bg-orange-500" };
    if (score <= 4) return { score: score * 25, label: "Good", color: "bg-blue-500" };
    return { score: 100, label: "Strong", color: "bg-green-500" };
  }, [password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!acceptTerms) {
      setError("Please accept the Terms of Service and Privacy Policy");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      await register(email, password, name);
      router.push("/dashboard");
    } catch (err) {
      setError("Registration failed. Please try again.");
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
            className="relative hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden"
          >
            {/* Animated Background Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

            <div className="relative z-10 space-y-8">
              {/* Welcome Message */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-6xl">🎓</span>
                  <h1 className="text-5xl font-bold">Start Your Journey</h1>
                </div>
                <p className="text-xl opacity-90 max-w-md">
                  Join 500+ students preparing for TU Delft Aerospace Engineering admission
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center text-2xl">
                      📚
                    </div>
                    <div>
                      <p className="font-bold text-lg">300+ Practice Problems</p>
                      <p className="text-sm opacity-80">Covering Math, Physics, and Intro AE</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <div>
                      <p className="font-bold text-lg">AI-Powered Analysis</p>
                      <p className="text-sm opacity-80">Get personalized recommendations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center text-2xl">
                      📈
                    </div>
                    <div>
                      <p className="font-bold text-lg">Progress Tracking</p>
                      <p className="text-sm opacity-80">Monitor your improvement over time</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stats */}
              <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-sm opacity-80 mb-3">Students who completed 50+ problems</p>
                <div className="flex items-end gap-4">
                  <div>
                    <p className="text-5xl font-bold">87%</p>
                    <p className="text-sm">Success Rate</p>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 w-[87%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-3 text-sm opacity-90">
                <span className="text-2xl">✓</span>
                <p>Trusted by aspiring aerospace engineers worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Registration Form */}
          <div className="flex items-center justify-center p-8 bg-gradient-to-b from-purple-50/30 to-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md"
            >
              <Card className="border-2 shadow-xl">
                <CardHeader className="space-y-2 text-center pb-8">
                  <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
                  <CardDescription className="text-base">
                    Start your journey to TU Delft Aerospace Engineering
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">Full Name</Label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          👤
                        </div>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10 h-12 border-2 focus-visible:ring-2"
                          required
                        />
                      </div>
                    </div>

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

                    {/* Password Field with Strength Meter */}
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
                      {password && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Password strength:</span>
                            <span className={`font-semibold ${
                              passwordStrength.label === "Weak" ? "text-red-500" :
                              passwordStrength.label === "Fair" ? "text-orange-500" :
                              passwordStrength.label === "Good" ? "text-blue-500" :
                              "text-green-500"
                            }`}>
                              {passwordStrength.label}
                            </span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${passwordStrength.score}%` }}
                              transition={{ duration: 0.3 }}
                              className={`h-full ${passwordStrength.color}`}
                            />
                          </div>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground">
                        At least 8 characters with uppercase, lowercase, and numbers
                      </p>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-semibold">Confirm Password</Label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          🔒
                        </div>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="pl-10 h-12 border-2 focus-visible:ring-2"
                          required
                        />
                      </div>
                      {confirmPassword && (
                        <div className="flex items-center gap-2 text-xs">
                          {password === confirmPassword ? (
                            <>
                              <span className="text-green-500">✓</span>
                              <span className="text-green-500">Passwords match</span>
                            </>
                          ) : (
                            <>
                              <span className="text-red-500">✗</span>
                              <span className="text-red-500">Passwords do not match</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Terms Acceptance */}
                    <div className="flex items-start gap-2 pt-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="w-4 h-4 mt-0.5 rounded border-2 cursor-pointer"
                        required
                      />
                      <Label htmlFor="terms" className="text-xs cursor-pointer leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline font-medium">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline font-medium">
                          Privacy Policy
                        </Link>
                      </Label>
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
                      className="w-full h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin">⏳</span>
                          Creating account...
                        </span>
                      ) : (
                        "Create Account →"
                      )}
                    </Button>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-background text-muted-foreground">
                          Or sign up with
                        </span>
                      </div>
                    </div>

                    {/* Social Sign Up Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="h-11 border-2"
                        disabled
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

                    {/* Sign In Link */}
                    <div className="text-center pt-4">
                      <p className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                          href="/login"
                          className="text-primary hover:underline font-semibold"
                        >
                          Sign in →
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
                  <p>Secure signup · Your data is encrypted and protected</p>
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

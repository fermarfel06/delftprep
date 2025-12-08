"use client";

import { useState, useMemo } from "react";
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

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

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

    if (passwordStrength.score < 50) {
      setError("Password is too weak. Please use a stronger password.");
      return;
    }

    setIsLoading(true);

    try {
      // 1. Create account via registration endpoint
      const registerRes = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await registerRes.json();

      if (!registerRes.ok) {
        setError(data.error || "Registration failed. Please try again.");
        setIsLoading(false);
        return;
      }

      // 2. Auto-login after successful registration
      const signInResult = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (signInResult?.error) {
        setError("Account created but login failed. Please try logging in manually.");
        setIsLoading(false);
        return;
      }

      // 3. Success - redirect to dashboard
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
                        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                      >
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
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

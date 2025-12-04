"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const stats = [
    { value: "300+", label: "Practice Problems" },
    { value: "87%", label: "Average Accuracy" },
    { value: "500+", label: "Students Helped" },
    { value: "4.9/5", label: "Student Rating" },
  ];

  const features = [
    {
      icon: "📚",
      title: "Comprehensive Problem Bank",
      description:
        "300+ carefully curated problems covering math, physics, and aerospace fundamentals aligned with TU Delft standards.",
    },
    {
      icon: "📊",
      title: "Smart Progress Tracking",
      description:
        "Monitor your accuracy by topic and identify areas for improvement with detailed analytics and visual insights.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Insights",
      description:
        "Get personalized study plans and problem recommendations based on your performance using advanced AI analysis.",
    },
    {
      icon: "💡",
      title: "Detailed Solutions",
      description:
        "Step-by-step explanations help you understand not just the answer, but the methodology and reasoning.",
    },
    {
      icon: "🎯",
      title: "Focused Learning Path",
      description:
        "Structured curriculum designed specifically for TU Delft Aerospace Engineering admission requirements.",
    },
    {
      icon: "⚡",
      title: "Instant Feedback",
      description:
        "Get immediate feedback on your solutions with hints available when you need a little help.",
    },
  ];

  const testimonials = [
    {
      name: "Emma S.",
      role: "TU Delft Student",
      content:
        "DelftPrep was instrumental in my preparation. The AI analysis helped me focus on my weak areas, and I got admitted!",
      rating: 5,
    },
    {
      name: "Lucas M.",
      role: "Aerospace Engineering, 2nd Year",
      content:
        "The problem bank is excellent. The solutions are detailed and helped me build a strong foundation before starting the program.",
      rating: 5,
    },
    {
      name: "Sofia R.",
      role: "Pre-University Student",
      content:
        "I love how the platform tracks my progress. It motivated me to keep practicing and improving my scores consistently.",
      rating: 5,
    },
  ];

  const sampleProblems = [
    {
      id: "1",
      title: "Projectile Motion Basics",
      difficulty: "easy",
      subject: "Physics",
      topics: ["Mechanics", "Kinematics"],
    },
    {
      id: "2",
      title: "Lift Coefficient Calculation",
      difficulty: "medium",
      subject: "Intro AE",
      topics: ["Aerodynamics"],
    },
    {
      id: "3",
      title: "Vector Cross Product",
      difficulty: "easy",
      subject: "Math",
      topics: ["Linear Algebra"],
    },
  ];

  const tiers = [
    {
      name: "Starter",
      price: "35€",
      description: "Perfect for getting started",
      features: [
        "Access to 50+ practice problems",
        "Basic progress tracking",
        "Math and Physics problems",
        "Email support",
      ],
    },
    {
      name: "Enhanced",
      price: "50€",
      description: "Most popular choice",
      features: [
        "Access to 150+ practice problems",
        "Advanced progress tracking",
        "All subjects including Intro AE",
        "Detailed solutions",
        "Priority email support",
      ],
      highlighted: true,
    },
    {
      name: "Complete",
      price: "100€",
      description: "Everything you need to succeed",
      features: [
        "Access to 300+ practice problems",
        "AI-powered weak topic analysis",
        "Personalized study plans",
        "Problem recommendations",
        "All subjects",
        "1-on-1 consultation",
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Gradient Background */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block"
              >
                <Badge className="px-4 py-2 text-sm font-medium">
                  🚀 Trusted by 500+ Students
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold tracking-tight"
              >
                Master Your Path to
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  TU Delft Aerospace
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Comprehensive problem bank, AI-powered recommendations, and
                personalized study plans to help you ace your admission.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex gap-4 justify-center pt-4"
              >
                <Link href="/register">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
                  >
                    View Pricing
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="pt-8 text-sm text-muted-foreground"
              >
                ⭐ 14-day money-back guarantee • No credit card required
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white border-y">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Everything You Need to Excel
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools and resources designed for TU Delft admission
                success
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                    <CardHeader>
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Loved by Students
              </h2>
              <p className="text-xl text-muted-foreground">
                See what our students say about their experience
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 border-2 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-500">
                            ⭐
                          </span>
                        ))}
                      </div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm italic">&ldquo;{testimonial.content}&rdquo;</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Sample Problems Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Preview Our Problem Bank
              </h2>
              <p className="text-xl text-muted-foreground">
                Get a taste of what you'll be practicing
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {sampleProblems.map((problem) => (
                <motion.div key={problem.id} variants={fadeInUp}>
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <CardTitle className="text-lg">{problem.title}</CardTitle>
                          <CardDescription>{problem.subject}</CardDescription>
                        </div>
                        <Badge
                          variant={
                            problem.difficulty === "easy"
                              ? "secondary"
                              : problem.difficulty === "medium"
                              ? "default"
                              : "destructive"
                          }
                        >
                          {problem.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {problem.topics.map((topic) => (
                          <Badge key={topic} variant="outline">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <Link href="/register">
                <Button size="lg" className="text-lg px-8 py-6">
                  Explore 300+ Problems
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Choose Your Plan
              </h2>
              <p className="text-xl text-muted-foreground">
                Flexible pricing for every student's needs
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {tiers.map((tier) => (
                <motion.div
                  key={tier.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className={tier.highlighted ? "relative" : ""}
                >
                  <Card
                    className={`h-full ${
                      tier.highlighted
                        ? "border-primary shadow-2xl ring-2 ring-primary/20"
                        : "hover:shadow-lg"
                    } transition-all duration-300`}
                  >
                    {tier.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="px-4 py-1">Most Popular</Badge>
                      </div>
                    )}

                    <CardHeader className="space-y-4 pt-8">
                      <div>
                        <CardTitle className="text-2xl">{tier.name}</CardTitle>
                        <CardDescription>{tier.description}</CardDescription>
                      </div>
                      <div>
                        <span className="text-5xl font-bold">{tier.price}</span>
                        <span className="text-muted-foreground ml-2">
                          one-time
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">✓</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/pricing" className="block">
                        <Button
                          className="w-full"
                          size="lg"
                          variant={tier.highlighted ? "default" : "outline"}
                        >
                          Get Started
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
          {/* Animated background shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join hundreds of students preparing for TU Delft Aerospace
                Engineering with confidence
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 hover:scale-105 transition-transform"
                  >
                    Get Started Today
                  </Button>
                </Link>
              </div>
              <div className="pt-4 text-sm opacity-75">
                ✓ 14-day money-back guarantee • ✓ No credit card required
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

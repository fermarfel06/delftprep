"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCheckout = (tier: string) => {
    setSelectedTier(tier);
    // TODO: Implement actual checkout flow
    alert(
      `Checkout for ${tier} tier will be implemented here.\nTODO: Connect to payment API`
    );
  };

  const tiers = [
    {
      id: "starter",
      name: "Starter",
      price: "35€",
      originalPrice: "49€",
      discount: "29% OFF",
      description: "Perfect for getting started",
      bestFor: "Students exploring options",
      duration: "6 months",
      features: [
        { text: "50+ practice problems", included: true },
        { text: "Basic progress tracking", included: true },
        { text: "Math and Physics problems", included: true },
        { text: "Detailed solutions & hints", included: true },
        { text: "Email support", included: true },
        { text: "Mobile-friendly interface", included: true },
        { text: "Intro Aerospace problems", included: false },
        { text: "AI-powered analysis", included: false },
        { text: "Personalized study plans", included: false },
      ],
      cta: "Start Learning",
      popular: false,
    },
    {
      id: "enhanced",
      name: "Enhanced",
      price: "50€",
      originalPrice: "79€",
      discount: "37% OFF",
      description: "Most popular choice",
      bestFor: "Serious students preparing for admission",
      duration: "12 months",
      features: [
        { text: "150+ practice problems", included: true },
        { text: "Advanced progress tracking", included: true },
        { text: "All subjects: Math, Physics, Intro AE", included: true },
        { text: "Detailed step-by-step solutions", included: true },
        { text: "Topic-wise accuracy tracking", included: true },
        { text: "Priority email support", included: true },
        { text: "Mobile & desktop access", included: true },
        { text: "Performance analytics", included: true },
        { text: "AI-powered analysis", included: false },
        { text: "Personalized study plans", included: false },
      ],
      cta: "Get Enhanced",
      popular: true,
    },
    {
      id: "complete",
      name: "Complete",
      price: "100€",
      originalPrice: "149€",
      discount: "33% OFF",
      description: "Everything you need",
      bestFor: "Students who want guaranteed success",
      duration: "18 months",
      features: [
        { text: "300+ practice problems", included: true },
        { text: "All subjects with advanced topics", included: true },
        { text: "AI-powered weak topic analysis", included: true },
        { text: "Personalized study plans", included: true },
        { text: "Smart problem recommendations", included: true },
        { text: "Performance insights dashboard", included: true },
        { text: "1-on-1 consultation session", included: true },
        { text: "Priority support (24h response)", included: true },
        { text: "Exclusive study materials", included: true },
        { text: "Certificate of completion", included: true },
      ],
      cta: "Get Complete",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes! You can upgrade to a higher tier at any time. You'll only pay the difference between your current plan and the new one, prorated for the remaining time.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 14-day money-back guarantee, no questions asked. If you're not satisfied with DelftPrep within 14 days of purchase, contact us for a full refund.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for EU students. All payments are processed securely through Stripe.",
    },
    {
      question: "Do I need to pay for each subject separately?",
      answer:
        "No! Each tier includes all available subjects for that tier. Enhanced and Complete tiers include Math, Physics, and Intro Aerospace Engineering problems.",
    },
    {
      question: "How long do I have access to the platform?",
      answer:
        "Access duration varies by tier: Starter (6 months), Enhanced (12 months), Complete (18 months). After expiration, you can renew or upgrade at any time.",
    },
    {
      question: "Is there a student discount?",
      answer:
        "The prices shown already include our educational discount! We occasionally offer promotional discounts - sign up for our newsletter to stay informed.",
    },
    {
      question: "Can I share my account with friends?",
      answer:
        "No, accounts are for individual use only. Account sharing violates our terms of service and may result in account suspension. We offer referral discounts if you'd like to recommend friends!",
    },
    {
      question: "What makes the Complete tier worth it?",
      answer:
        "The Complete tier includes AI-powered analysis that identifies your weak topics, generates personalized study plans, and recommends specific problems. It also includes a 1-on-1 consultation with a TU Delft student or alumnus.",
    },
  ];

  const comparisonFeatures = [
    { feature: "Practice Problems", starter: "50+", enhanced: "150+", complete: "300+" },
    { feature: "Access Duration", starter: "6 months", enhanced: "12 months", complete: "18 months" },
    { feature: "Math & Physics", starter: true, enhanced: true, complete: true },
    { feature: "Intro Aerospace", starter: false, enhanced: true, complete: true },
    { feature: "Progress Tracking", starter: "Basic", enhanced: "Advanced", complete: "Advanced" },
    { feature: "Detailed Solutions", starter: true, enhanced: true, complete: true },
    { feature: "AI Analysis", starter: false, enhanced: false, complete: true },
    { feature: "Study Plans", starter: false, enhanced: false, complete: true },
    { feature: "1-on-1 Consultation", starter: false, enhanced: false, complete: true },
    { feature: "Support Response", starter: "48h", enhanced: "24h", complete: "24h" },
  ];

  const trustBadges = [
    { icon: "🔒", text: "Secure Payment" },
    { icon: "💰", text: "14-Day Money Back" },
    { icon: "✅", text: "Instant Access" },
    { icon: "🎓", text: "500+ Students" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="px-4 py-2 text-sm font-medium mb-4">
                  💎 Limited Time Offer - Up to 37% OFF
                </Badge>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Success Plan
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Flexible pricing designed for students. Start free, upgrade anytime.
              </p>

              <div className="flex flex-wrap gap-6 justify-center pt-6">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="text-2xl">{badge.icon}</span>
                    <span className="font-medium">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid lg:grid-cols-3 gap-8"
            >
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="relative"
                >
                  <Card
                    className={`h-full ${
                      tier.popular
                        ? "border-primary shadow-2xl ring-2 ring-primary/20 scale-105"
                        : "hover:shadow-xl"
                    } transition-all duration-300`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <Badge className="px-6 py-2 text-sm font-bold shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                          🌟 MOST POPULAR
                        </Badge>
                      </div>
                    )}

                    {tier.discount && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <div className="bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg transform rotate-12">
                          {tier.discount}
                        </div>
                      </div>
                    )}

                    <CardHeader className={`space-y-4 ${tier.popular ? "pt-10" : "pt-8"}`}>
                      <div>
                        <CardTitle className="text-3xl font-bold">{tier.name}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {tier.description}
                        </CardDescription>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold">{tier.price}</span>
                          {tier.originalPrice && (
                            <span className="text-2xl text-muted-foreground line-through">
                              {tier.originalPrice}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          One-time payment • {tier.duration} access
                        </p>
                        <div className="pt-2">
                          <Badge variant="outline" className="text-xs">
                            Best for: {tier.bestFor}
                          </Badge>
                        </div>
                      </div>

                      <Button
                        size="lg"
                        className={`w-full ${
                          tier.popular
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            : ""
                        }`}
                        onClick={() => handleCheckout(tier.name)}
                      >
                        {tier.cta} →
                      </Button>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-muted-foreground">
                          What's included:
                        </p>
                        <ul className="space-y-3">
                          {tier.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className={`flex items-start gap-3 text-sm ${
                                !feature.included ? "opacity-40" : ""
                              }`}
                            >
                              <span
                                className={`mt-0.5 ${
                                  feature.included ? "text-green-500" : "text-gray-400"
                                }`}
                              >
                                {feature.included ? "✓" : "×"}
                              </span>
                              <span>{feature.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container mx-auto max-w-6xl space-y-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Compare Plans in Detail
              </h2>
              <p className="text-xl text-muted-foreground">
                See exactly what you get with each tier
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <tr>
                        <th className="text-left py-6 px-6 font-semibold text-lg">
                          Feature
                        </th>
                        <th className="text-center py-6 px-4 font-semibold text-lg">
                          Starter
                        </th>
                        <th className="text-center py-6 px-4 font-semibold text-lg bg-primary/10">
                          Enhanced
                        </th>
                        <th className="text-center py-6 px-4 font-semibold text-lg">
                          Complete
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {comparisonFeatures.map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="hover:bg-blue-50/50 transition-colors"
                        >
                          <td className="py-4 px-6 font-medium">{item.feature}</td>
                          <td className="text-center py-4 px-4">
                            {typeof item.starter === "boolean" ? (
                              <span
                                className={
                                  item.starter ? "text-green-500" : "text-gray-400"
                                }
                              >
                                {item.starter ? "✓" : "×"}
                              </span>
                            ) : (
                              <span className="text-sm">{item.starter}</span>
                            )}
                          </td>
                          <td className="text-center py-4 px-4 bg-primary/5">
                            {typeof item.enhanced === "boolean" ? (
                              <span
                                className={
                                  item.enhanced ? "text-green-500" : "text-gray-400"
                                }
                              >
                                {item.enhanced ? "✓" : "×"}
                              </span>
                            ) : (
                              <span className="text-sm font-medium">{item.enhanced}</span>
                            )}
                          </td>
                          <td className="text-center py-4 px-4">
                            {typeof item.complete === "boolean" ? (
                              <span
                                className={
                                  item.complete ? "text-green-500" : "text-gray-400"
                                }
                              >
                                {item.complete ? "✓" : "×"}
                              </span>
                            ) : (
                              <span className="text-sm">{item.complete}</span>
                            )}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Trusted by Students Worldwide
                </h2>
                <div className="flex items-center justify-center gap-2 text-yellow-500 text-3xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-lg text-muted-foreground mt-2">
                  4.9/5 average rating from 500+ students
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-3 gap-6 pt-8"
              >
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">87%</div>
                    <p className="text-sm text-muted-foreground">
                      Average accuracy improvement
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-sm text-muted-foreground">
                      Students successfully prepared
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">300+</div>
                    <p className="text-sm text-muted-foreground">
                      Curated practice problems
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container mx-auto max-w-4xl space-y-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our pricing
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card
                    className="cursor-pointer hover:shadow-md transition-all"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                        <span
                          className={`text-2xl transition-transform duration-300 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </div>
                    </CardHeader>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <CardContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Money-Back Guarantee Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="py-12 text-center space-y-6">
                  <div className="text-6xl">🛡️</div>
                  <h3 className="text-3xl font-bold">
                    14-Day Money-Back Guarantee
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Try DelftPrep risk-free. If you're not completely satisfied
                    within 14 days, we'll refund your purchase. No questions asked.
                  </p>
                  <div className="flex gap-4 justify-center pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span>Full refund</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span>No questions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span>Instant process</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
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
                Ready to Ace Your TU Delft Admission?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join hundreds of successful students. Start your preparation today
                with our risk-free guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 hover:scale-105 transition-transform"
                  >
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/10 hover:scale-105 transition-all"
                  >
                    Talk to Us
                  </Button>
                </Link>
              </div>
              <div className="pt-4 text-sm opacity-75 space-y-1">
                <p>✓ Secure payment via Stripe</p>
                <p>✓ Instant access • ✓ No recurring charges</p>
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

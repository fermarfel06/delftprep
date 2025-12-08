"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TutoringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_TUTORING_PACK_5;

      if (!priceId) {
        alert("Tutoring pack not configured. Please contact support.");
        setLoading(false);
        return;
      }

      // Call API to create checkout session
      const response = await fetch("/api/checkout/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, tier: "tutoring" }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Checkout error:", error);

      // Check if error is 401 Unauthorized - redirect to login
      if (error instanceof Error && error.message.includes("Unauthorized")) {
        router.push("/login?redirect=" + encodeURIComponent(window.location.pathname));
        return;
      }

      // For other errors, show alert
      alert(
        error instanceof Error
          ? error.message
          : "Failed to start checkout. Please try again."
      );
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: "👨‍🏫",
      title: "Expert TU Delft Tutors",
      description: "Learn from current students and alumni who've aced the admission process",
    },
    {
      icon: "📅",
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience, with easy rescheduling options",
    },
    {
      icon: "🎯",
      title: "Personalized Learning",
      description: "Tailored guidance focused on your weak topics and learning style",
    },
    {
      icon: "💬",
      title: "Video Sessions",
      description: "One-on-one sessions via Zoom or Google Meet with screen sharing",
    },
    {
      icon: "📝",
      title: "Session Notes",
      description: "Receive detailed notes and resources after each tutoring session",
    },
    {
      icon: "🔄",
      title: "Follow-up Support",
      description: "Email support between sessions for quick questions and clarifications",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      icon: "📦",
      title: "Purchase Package",
      description: "Buy your pack of 5 tutoring sessions with secure one-time payment",
    },
    {
      step: "2",
      icon: "📅",
      title: "Schedule Sessions",
      description: "We'll email you within 24 hours to set up your first session",
    },
    {
      step: "3",
      icon: "🎓",
      title: "Meet Your Tutor",
      description: "Connect via video call and start your personalized learning journey",
    },
    {
      step: "4",
      icon: "📈",
      title: "Track Progress",
      description: "See improvement in your understanding and problem-solving skills",
    },
  ];

  const tutors = [
    {
      emoji: "🧑‍🎓",
      name: "Aerospace Engineering Student",
      year: "3rd Year AE Major",
      rating: 4.9,
      specialties: ["Math", "Physics", "Intro AE"],
      bio: "Scored 95% on admission exams. Specializes in breaking down complex concepts into simple explanations.",
    },
    {
      emoji: "👨‍🎓",
      name: "TU Delft Alumni",
      year: "Graduate • 2023",
      rating: 5.0,
      specialties: ["Math", "Problem Solving"],
      bio: "Former teaching assistant with 3+ years of tutoring experience. Helped 50+ students gain admission.",
    },
    {
      emoji: "👩‍🎓",
      name: "Senior AE Student",
      year: "4th Year Honors",
      rating: 4.8,
      specialties: ["Physics", "Calculus"],
      bio: "Top of class with deep understanding of all admission topics. Patient and encouraging teaching style.",
    },
  ];

  const topics = [
    "Problem-solving strategies and techniques",
    "Exam preparation and time management",
    "Concept clarification and deep understanding",
    "Study plan optimization for your schedule",
    "Weak topic identification and targeted practice",
    "Practice problem walkthroughs with explanations",
  ];

  const testimonials = [
    {
      quote: "The tutoring sessions were a game-changer. My tutor helped me understand topics I'd been struggling with for months. Got admitted to TU Delft!",
      name: "Sarah M.",
      rating: 5,
    },
    {
      quote: "Flexible scheduling made it easy to fit sessions around my school work. The personalized approach really helped me improve my weak areas.",
      name: "Ahmed K.",
      rating: 5,
    },
    {
      quote: "Best investment I made in my preparation. The tutors really know their stuff and explain everything clearly. Highly recommend!",
      name: "Lisa P.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How long is each tutoring session?",
      answer: "Each session is 60 minutes long, giving you plenty of time for in-depth topic coverage, problem-solving practice, and Q&A with your tutor.",
    },
    {
      question: "Can I choose my tutor?",
      answer: "We'll match you with a tutor based on your needs and weak topics. If you have a preference after your first session, we can arrange a switch.",
    },
    {
      question: "What if I need to reschedule a session?",
      answer: "You can reschedule up to 24 hours before your session with no penalty. Just email us and we'll find a new time that works for you.",
    },
    {
      question: "How do I book sessions after purchase?",
      answer: "We'll email you within 24 hours of purchase to schedule your first session. After that, you can book follow-up sessions directly with your tutor.",
    },
    {
      question: "What platforms do you use for video calls?",
      answer: "We primarily use Zoom, but can accommodate Google Meet or other platforms if you prefer. All sessions include screen sharing for problem-solving.",
    },
    {
      question: "Can I get a refund if not satisfied?",
      answer: "Yes! If you're not satisfied after your first session, contact us within 48 hours for a full refund. We're confident you'll love the tutoring.",
    },
    {
      question: "Do tutoring packs expire?",
      answer: "Your pack of 5 sessions is valid for 6 months from purchase date, giving you plenty of time to schedule all your sessions.",
    },
    {
      question: "Can I purchase multiple packs?",
      answer: "Absolutely! Many students purchase additional packs as they progress through their preparation. Contact us for volume discounts.",
    },
  ];

  const comparison = [
    { feature: "Study Method", selfStudy: "Solo learning", tutoring: "Guided by experts" },
    { feature: "Feedback", selfStudy: "None or delayed", tutoring: "Immediate and personalized" },
    { feature: "Weak Topics", selfStudy: "Self-identified", tutoring: "Expert analysis" },
    { feature: "Question Support", selfStudy: "Limited resources", tutoring: "Unlimited during sessions" },
    { feature: "Motivation", selfStudy: "Self-driven", tutoring: "Accountable to tutor" },
    { feature: "Success Rate", selfStudy: "65%", tutoring: "92%" },
  ];

  const trustBadges = [
    { icon: "🔒", text: "Secure Payment" },
    { icon: "💰", text: "Money-Back Guarantee" },
    { icon: "🎓", text: "Expert Tutors" },
    { icon: "📅", text: "Flexible Schedule" },
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
                  🎓 1-on-1 Expert Tutoring
                </Badge>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Get Personal Guidance from{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  TU Delft Experts
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Master challenging topics with personalized 1-on-1 sessions from TU Delft students and alumni
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

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl space-y-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose Our Tutoring
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Personalized support designed to accelerate your preparation
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="pt-6 space-y-4">
                      <div className="text-5xl mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Card Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Start Your Tutoring Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                One simple package with everything you need
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative max-w-lg mx-auto"
            >
              <Card className="border-primary shadow-2xl ring-2 ring-primary/20 scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="px-6 py-2 text-sm font-bold shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                    🌟 MOST POPULAR
                  </Badge>
                </div>

                <CardHeader className="space-y-4 pt-10">
                  <div>
                    <CardTitle className="text-3xl font-bold">Tutoring Pack of 5</CardTitle>
                    <CardDescription className="text-base mt-2">
                      5 one-on-one tutoring sessions
                    </CardDescription>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">150€</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      One-time payment • Valid for 6 months
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    onClick={handleCheckout}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Processing...
                      </>
                    ) : (
                      <>Book Your Pack →</>
                    )}
                  </Button>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground">
                      What's included:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>5× 60-minute sessions</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Expert TU Delft tutors</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Flexible scheduling</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Video call (Zoom/Meet)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Session recordings</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Detailed session notes</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Email support between sessions</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Custom study materials</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl space-y-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Getting started is simple and straightforward
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {howItWorks.map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full text-center bg-gradient-to-br from-blue-50 to-indigo-50">
                    <CardContent className="pt-6 space-y-4">
                      <div className="text-5xl mb-2">{item.icon}</div>
                      <div className="text-sm font-bold text-primary">STEP {item.step}</div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Meet Our Tutors Section */}
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
                Meet Our Tutors
              </h2>
              <p className="text-xl text-muted-foreground">
                Learn from the best – TU Delft students and alumni
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {tutors.map((tutor, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-50">
                    <CardContent className="pt-6 space-y-4 text-center">
                      <div className="text-6xl mb-2">{tutor.emoji}</div>
                      <div>
                        <h3 className="text-xl font-semibold">{tutor.name}</h3>
                        <p className="text-sm text-muted-foreground">{tutor.year}</p>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm font-semibold ml-1">{tutor.rating}/5</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {tutor.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline">{specialty}</Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{tutor.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl space-y-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                What to Expect in Sessions
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive coverage of all admission topics
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {topics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl mt-0.5">•</span>
                        <span className="text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Hear from students who aced their admission with our tutoring
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
                  <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-50">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      <p className="font-semibold">— {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl space-y-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Self-Study vs Tutoring
              </h2>
              <p className="text-xl text-muted-foreground">
                See the difference personalized guidance makes
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <tr>
                        <th className="text-left py-6 px-6 font-semibold text-lg">Feature</th>
                        <th className="text-center py-6 px-4 font-semibold text-lg">Self-Study</th>
                        <th className="text-center py-6 px-4 font-semibold text-lg bg-primary/10">With Tutoring</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {comparison.map((item, index) => (
                        <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                          <td className="py-4 px-6 font-medium">{item.feature}</td>
                          <td className="text-center py-4 px-4 text-sm text-muted-foreground">
                            {item.selfStudy}
                          </td>
                          <td className="text-center py-4 px-4 bg-primary/5">
                            <span className="text-sm font-medium text-primary">{item.tutoring}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
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
                Everything you need to know about our tutoring
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
                Ready to Accelerate Your Preparation?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join students who've improved their scores with expert guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 hover:scale-105 transition-transform"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Book Tutoring Pack"}
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/10 hover:scale-105 transition-all"
                  >
                    Talk to an Advisor
                  </Button>
                </Link>
              </div>
              <div className="pt-4 text-sm opacity-75 space-y-1">
                <p>✓ Secure payment via Stripe</p>
                <p>✓ Money-back guarantee • ✓ Start within 24 hours</p>
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
      `}</style>
    </div>
  );
}

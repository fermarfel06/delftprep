"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-6xl space-y-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-16 text-white text-center"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 text-base px-4 py-1">
                About Us
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Empowering Future Aerospace Engineers
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                We're on a mission to help aspiring students achieve their dreams of studying at TU Delft
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: "👥", value: "500+", label: "Active Students" },
              { icon: "📚", value: "300+", label: "Practice Problems" },
              { icon: "🎯", value: "87%", label: "Success Rate" },
              { icon: "⭐", value: "4.9/5", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-shadow border-2">
                  <CardContent className="pt-6 pb-6">
                    <div className="text-5xl mb-3">{stat.icon}</div>
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2">
              <CardHeader className="pb-8">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">📖</span>
                  <CardTitle className="text-3xl">Our Story</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">DelftPrep was born from experience.</span> Founded by a team of TU Delft Aerospace Engineering alumni, we intimately understand the challenges of preparing for one of the world's most prestigious technical programs.
                </p>
                <p className="text-muted-foreground">
                  We remember the <span className="font-semibold text-foreground">countless hours</span> spent searching for quality practice problems, the frustration of not knowing which topics to prioritize, and the uncertainty about whether we were truly prepared. These struggles became our motivation.
                </p>
                <p className="text-muted-foreground">
                  After successfully completing our degrees and gaining experience in the aerospace industry, we decided to <span className="font-semibold text-foreground">create the resource we wished existed</span> during our own preparation journey.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-blue-900 font-medium italic">
                    "DelftPrep combines our collective knowledge of the TU Delft curriculum with modern educational technology to create an effective, accessible preparation platform that gives every student a fair chance at success."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                      🎯
                    </div>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    To provide aspiring aerospace engineers with comprehensive, high-quality preparation resources that level the playing field and maximize their chances of admission to TU Delft.
                  </p>
                  <p>
                    We believe every motivated student deserves access to excellent preparation materials, regardless of their background or location.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                      🔭
                    </div>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    To become the leading preparation platform for aerospace engineering education, helping thousands of students worldwide achieve their academic dreams.
                  </p>
                  <p>
                    We envision a future where quality education is accessible to all, and where technology enhances learning in meaningful ways.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* What We Offer */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools and resources designed to prepare you for success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "📚",
                  title: "300+ Practice Problems",
                  description: "Carefully curated problems covering mathematics, physics, and aerospace fundamentals, all aligned with TU Delft admission requirements.",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  icon: "✏️",
                  title: "Detailed Solutions",
                  description: "Step-by-step solutions with clear explanations help you understand not just the answer, but the methodology and reasoning behind it.",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: "📊",
                  title: "Progress Tracking",
                  description: "Monitor your improvement with detailed analytics showing your accuracy by topic, helping you identify areas for focused study.",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: "🤖",
                  title: "AI-Powered Analysis",
                  description: "Our Complete tier includes AI analysis that identifies your weak topics and generates personalized study plans and recommendations.",
                  color: "from-orange-500 to-red-500",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform`}>
                          {feature.icon}
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-bold text-xl">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "⭐",
                  title: "Quality Over Quantity",
                  description: "Every problem is carefully reviewed to ensure relevance and alignment with TU Delft standards.",
                },
                {
                  icon: "🌍",
                  title: "Accessibility",
                  description: "Quality education should be accessible. Our pricing is affordable while maintaining comprehensive content.",
                },
                {
                  icon: "🚀",
                  title: "Innovation",
                  description: "We leverage modern technology and AI to provide personalized, effective learning experiences.",
                },
                {
                  icon: "🎓",
                  title: "Student Success",
                  description: "Your success is our success. We measure our impact by your achievements at TU Delft.",
                },
              ].map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full text-center hover:shadow-lg transition-shadow border-2">
                    <CardContent className="pt-8 pb-6 space-y-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-4xl mx-auto">
                        {value.icon}
                      </div>
                      <h3 className="font-bold text-lg">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none">
              <CardContent className="py-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Join hundreds of students preparing for TU Delft Aerospace Engineering admission
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/register">
                    <Button size="lg" variant="secondary" className="text-lg px-8">
                      Get Started →
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white/30 text-white">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

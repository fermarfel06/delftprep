"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useUserStore } from "@/lib/store/userStore";

export default function DashboardPage() {
  const { isAuthenticated, user } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  // TODO: Replace with actual API call to /api/user/progress
  const { progress, recentActivity } = user;

  // Calculate streak (mock for now)
  const currentStreak = 7;
  const longestStreak = 14;

  // Achievements (mock)
  const achievements = [
    { icon: "🔥", title: "7-Day Streak", unlocked: true },
    { icon: "🎯", title: "50 Problems", unlocked: true },
    { icon: "⭐", title: "90% Accuracy", unlocked: false },
    { icon: "🏆", title: "100 Problems", unlocked: false },
  ];

  // Motivational message based on progress
  const getMotivationalMessage = () => {
    const accuracy = progress.accuracy;
    if (accuracy >= 80) return "Outstanding performance! Keep up the excellent work! 🌟";
    if (accuracy >= 70) return "Great progress! You're on the right track! 💪";
    if (accuracy >= 60) return "Good effort! A bit more practice and you'll excel! 📈";
    return "Keep practicing! Consistency is key to improvement! 🎯";
  };

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

  // Get circular progress percentage
  const completionPercentage = (progress.solvedProblems / progress.totalProblems) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-7xl space-y-8">
          {/* Hero Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12 text-white"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-4xl">👋</span>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Welcome back, {user.name}!
                </h1>
              </div>
              <p className="text-xl opacity-90">
                {getMotivationalMessage()}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="text-sm opacity-80">Current Streak</p>
                    <p className="font-bold text-lg">{currentStreak} days</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-sm opacity-80">Tier</p>
                    <p className="font-bold text-lg capitalize">{user.tier}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="text-sm opacity-80">Rank</p>
                    <p className="font-bold text-lg">Top 15%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Stats Grid */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-4"
          >
            {/* Circular Progress Card */}
            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative w-32 h-32">
                      <svg className="transform -rotate-90 w-32 h-32">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-gray-200"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 56}
                          strokeDashoffset={
                            2 * Math.PI * 56 * (1 - completionPercentage / 100)
                          }
                          className="text-primary transition-all duration-1000"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">
                          {Math.round(completionPercentage)}%
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{progress.solvedProblems}</p>
                      <p className="text-sm text-muted-foreground">
                        of {progress.totalProblems} problems
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Accuracy Card */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardDescription>Overall Accuracy</CardDescription>
                  <CardTitle className="text-5xl">{progress.accuracy}%</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={progress.accuracy} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {progress.accuracy >= 80
                      ? "Excellent! 🎉"
                      : progress.accuracy >= 70
                      ? "Very Good! 👍"
                      : "Keep going! 💪"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Streak Card */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardDescription>Current Streak</CardDescription>
                  <CardTitle className="text-5xl flex items-center gap-2">
                    🔥 {currentStreak}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Longest: {longestStreak} days
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Practice daily to maintain your streak!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Action Card */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardDescription>Next Step</CardDescription>
                  <CardTitle className="text-lg">Continue Learning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/problems">
                    <Button className="w-full" size="sm">
                      Solve Problems →
                    </Button>
                  </Link>
                  <Link href="/analysis">
                    <Button variant="outline" className="w-full" size="sm">
                      View Analysis
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Topic Performance */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Performance by Topic</CardTitle>
                <CardDescription>
                  Track your accuracy across different subjects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {progress.topicAccuracy.map((topic, index) => (
                    <motion.div
                      key={topic.topic}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <p className="font-semibold capitalize text-lg">
                              {topic.topic}
                            </p>
                            <Badge
                              variant={
                                topic.accuracy >= 80
                                  ? "default"
                                  : topic.accuracy >= 60
                                  ? "secondary"
                                  : "destructive"
                              }
                            >
                              {topic.accuracy.toFixed(1)}%
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {topic.correct} of {topic.total} problems correct
                          </p>
                        </div>
                        {topic.accuracy < 75 && (
                          <Link href="/problems">
                            <Button size="sm" variant="outline">
                              Practice
                            </Button>
                          </Link>
                        )}
                      </div>
                      <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${topic.accuracy}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full ${
                            topic.accuracy >= 80
                              ? "bg-gradient-to-r from-green-500 to-emerald-500"
                              : topic.accuracy >= 60
                              ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                              : "bg-gradient-to-r from-orange-500 to-red-500"
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom Grid: Recent Activity & Focus Areas */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recommended Focus Areas */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Focus Areas</CardTitle>
                  <CardDescription>
                    Topics that need your attention
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {progress.topicAccuracy
                    .filter((topic) => topic.accuracy < 75)
                    .slice(0, 3)
                    .map((topic, index) => (
                      <motion.div
                        key={topic.topic}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl">
                            ⚠️
                          </div>
                          <div>
                            <p className="font-semibold capitalize">{topic.topic}</p>
                            <p className="text-sm text-muted-foreground">
                              {topic.accuracy.toFixed(1)}% accuracy - Need improvement
                            </p>
                          </div>
                        </div>
                        <Link href="/problems">
                          <Button size="sm">Practice</Button>
                        </Link>
                      </motion.div>
                    ))}

                  {progress.topicAccuracy.filter((topic) => topic.accuracy < 75)
                    .length === 0 && (
                    <div className="text-center py-8">
                      <span className="text-6xl">🎉</span>
                      <p className="mt-4 font-semibold">Great job!</p>
                      <p className="text-sm text-muted-foreground">
                        You're doing well in all topics!
                      </p>
                    </div>
                  )}

                  <Link href="/analysis" className="block">
                    <Button variant="outline" className="w-full">
                      View Full Analysis →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest problem attempts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={activity.problemId}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Link href={`/problems/${activity.problemId}`}>
                          <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                                activity.solved
                                  ? "bg-green-100 text-green-600"
                                  : "bg-orange-100 text-orange-600"
                              }`}
                            >
                              {activity.solved ? "✓" : "○"}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{activity.problemTitle}</p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(activity.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <Badge variant={activity.solved ? "default" : "secondary"}>
                              {activity.solved ? "Solved" : "Attempted"}
                            </Badge>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Achievements</CardTitle>
                <CardDescription>
                  Your learning milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`p-6 rounded-lg text-center ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300"
                          : "bg-gray-50 border-2 border-gray-200 opacity-50"
                      }`}
                    >
                      <div className="text-5xl mb-2">{achievement.icon}</div>
                      <p className="font-semibold text-sm">{achievement.title}</p>
                      {achievement.unlocked && (
                        <Badge variant="secondary" className="mt-2 text-xs">
                          Unlocked
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions Footer */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none">
              <CardContent className="py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Ready to level up? 🚀
                    </h3>
                    <p className="opacity-90">
                      Continue your learning journey and master more topics
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Link href="/problems">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg px-8"
                      >
                        Practice Now
                      </Button>
                    </Link>
                  </div>
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

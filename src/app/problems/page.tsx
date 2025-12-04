"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/store/userStore";
import { useProblemsStore } from "@/lib/store/problemsStore";

export default function ProblemsPage() {
  const { isAuthenticated } = useUserStore();
  const router = useRouter();

  const {
    problems,
    filters,
    isLoading,
    fetchProblems,
    setFilters,
    resetFilters,
    getFilteredProblems,
  } = useProblemsStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }
    if (problems.length === 0) {
      // TODO: Replace with actual API call to /api/problems
      fetchProblems();
    }
  }, [isAuthenticated, problems.length, fetchProblems, router]);

  const filteredProblems = getFilteredProblems();

  if (!isAuthenticated) {
    return null;
  }

  const subjectLabels: Record<string, string> = {
    math: "Mathematics",
    physics: "Physics",
    introAE: "Intro Aerospace",
  };

  const difficultyColors = {
    easy: "from-green-500 to-emerald-500",
    medium: "from-blue-500 to-indigo-500",
    hard: "from-orange-500 to-red-500",
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Calculate stats
  const easyCount = problems.filter((p) => p.difficulty === "easy").length;
  const mediumCount = problems.filter((p) => p.difficulty === "medium").length;
  const hardCount = problems.filter((p) => p.difficulty === "hard").length;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-7xl space-y-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12 text-white"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-5xl">📚</span>
                <h1 className="text-4xl md:text-5xl font-bold">Problem Bank</h1>
              </div>
              <p className="text-xl opacity-90 max-w-2xl">
                Master TU Delft admission topics with our comprehensive collection
                of {problems.length} practice problems
              </p>

              {/* Stats Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="text-sm opacity-80">Total Problems</p>
                    <p className="font-bold text-lg">{problems.length}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-500/30 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl">🟢</span>
                  <div>
                    <p className="text-sm opacity-80">Easy</p>
                    <p className="font-bold text-lg">{easyCount}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl">🔵</span>
                  <div>
                    <p className="text-sm opacity-80">Medium</p>
                    <p className="font-bold text-lg">{mediumCount}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-red-500/30 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl">🔴</span>
                  <div>
                    <p className="text-sm opacity-80">Hard</p>
                    <p className="font-bold text-lg">{hardCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2">
              <CardContent className="pt-6 space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    🔍
                  </div>
                  <Input
                    placeholder="Search problems by title or topic..."
                    value={filters.search}
                    onChange={(e) => setFilters({ search: e.target.value })}
                    className="pl-10 h-12 text-base border-2 focus-visible:ring-2"
                  />
                </div>

                {/* Subject Filter Pills */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold">Subject</label>
                  <div className="flex flex-wrap gap-2">
                    {["all", "math", "physics", "introAE"].map((subject) => (
                      <motion.button
                        key={subject}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFilters({ subject })}
                        className={`px-4 py-2 rounded-full font-medium transition-all ${
                          filters.subject === subject
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                            : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                        }`}
                      >
                        {subject === "all"
                          ? "All Subjects"
                          : subjectLabels[subject]}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Difficulty Filter Pills */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold">Difficulty</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: "all", label: "All Levels", icon: "🎯" },
                      { value: "easy", label: "Easy", icon: "🟢" },
                      { value: "medium", label: "Medium", icon: "🔵" },
                      { value: "hard", label: "Hard", icon: "🔴" },
                    ].map((diff) => (
                      <motion.button
                        key={diff.value}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFilters({ difficulty: diff.value })}
                        className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                          filters.difficulty === diff.value
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                            : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                        }`}
                      >
                        <span>{diff.icon}</span>
                        {diff.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Results Count & Reset */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Showing <span className="font-bold text-foreground">{filteredProblems.length}</span> of{" "}
                    <span className="font-bold text-foreground">{problems.length}</span> problems
                  </p>
                  {(filters.search || filters.subject !== "all" || filters.difficulty !== "all") && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetFilters}
                      className="hover:bg-destructive hover:text-destructive-foreground"
                    >
                      ✕ Clear All Filters
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Problems Grid */}
          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-64 animate-pulse">
                  <CardHeader className="space-y-3">
                    <div className="h-6 bg-secondary rounded"></div>
                    <div className="h-4 bg-secondary rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="h-4 bg-secondary rounded"></div>
                    <div className="h-4 bg-secondary rounded"></div>
                    <div className="h-4 bg-secondary rounded w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredProblems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-dashed border-2">
                <CardContent className="py-16">
                  <div className="text-center space-y-4">
                    <div className="text-8xl">🔍</div>
                    <h3 className="text-2xl font-bold">No problems found</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We couldn't find any problems matching your criteria. Try
                      adjusting your filters or search terms.
                    </p>
                    <Button onClick={resetFilters} size="lg" className="mt-4">
                      Clear All Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredProblems.map((problem, index) => (
                  <motion.div
                    key={problem.id}
                    variants={fadeInUp}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={`/problems/${problem.id}`}>
                      <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden border-2 hover:-translate-y-2">
                        {/* Gradient Border Effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            difficultyColors[problem.difficulty]
                          } opacity-0 group-hover:opacity-10 transition-opacity`}
                        ></div>

                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                              {problem.title}
                            </CardTitle>
                            <Badge
                              className={`shrink-0 bg-gradient-to-r ${
                                difficultyColors[problem.difficulty]
                              } text-white border-none capitalize`}
                            >
                              {problem.difficulty}
                            </Badge>
                          </div>
                          <CardDescription className="capitalize font-medium">
                            📖 {subjectLabels[problem.subject]}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {problem.statement}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {problem.topics.slice(0, 3).map((topic) => (
                              <Badge
                                key={topic}
                                variant="outline"
                                className="text-xs group-hover:border-primary transition-colors"
                              >
                                {topic}
                              </Badge>
                            ))}
                            {problem.topics.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{problem.topics.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Bottom CTA */}
          {!isLoading && filteredProblems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none">
                <CardContent className="py-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">
                      Want personalized recommendations? 🎯
                    </h3>
                    <p className="opacity-90 max-w-2xl mx-auto">
                      Get AI-powered insights on which problems to focus on based
                      on your performance and learning patterns
                    </p>
                    <Link href="/analysis">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg px-8 mt-4"
                      >
                        View AI Analysis →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

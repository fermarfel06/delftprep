"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useUserStore } from "@/lib/store/userStore";
import { fetchUserAnalysis, AnalysisResponse } from "@/lib/api/analysis";

export default function AnalysisPage() {
  const { isAuthenticated } = useUserStore();
  const router = useRouter();

  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    const loadAnalysis = async () => {
      setIsLoading(true);
      try {
        // TODO: Replace with actual AI-powered API call to /api/analysis/user
        const data = await fetchUserAnalysis();
        setAnalysis(data);
      } catch (error) {
        console.error("Error loading analysis:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnalysis();
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center py-12">
              <div className="inline-block animate-pulse">
                <p className="text-lg text-muted-foreground">
                  Analyzing your performance...
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  This may take a moment
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="container mx-auto max-w-7xl text-center">
            <p className="text-muted-foreground">Failed to load analysis</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-7xl space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">AI Performance Analysis</h1>
            <p className="text-xl text-muted-foreground">
              Personalized insights to accelerate your learning
            </p>
          </div>

          {/* Overall Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Overall Progress</CardTitle>
              <CardDescription>
                Your journey towards TU Delft admission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {analysis.overallProgress}%
                  </span>
                  <Badge variant="default">On Track</Badge>
                </div>
                <Progress value={analysis.overallProgress} />
                <p className="text-sm text-muted-foreground">
                  You're making great progress! Keep solving problems consistently.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="border-primary">
            <CardHeader>
              <CardTitle>AI-Powered Insights</CardTitle>
              <CardDescription>
                Personalized recommendations based on your performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {analysis.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">●</span>
                    <span className="text-sm">{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Weak Topics Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Topics Needing Attention</CardTitle>
              <CardDescription>
                Focus on these areas to improve your overall performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysis.weakTopics.map((topic) => (
                  <div key={topic.topic} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{topic.topic}</p>
                        <p className="text-sm text-muted-foreground">
                          {topic.correctAttempts}/{topic.totalAttempts} correct
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            topic.accuracy >= 70
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {topic.accuracy}%
                        </Badge>
                        {topic.recommended && (
                          <p className="text-xs text-primary mt-1">
                            Priority Focus
                          </p>
                        )}
                      </div>
                    </div>
                    <Progress value={topic.accuracy} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommended Problems */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended Problems</CardTitle>
              <CardDescription>
                Problems selected to address your weak areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {analysis.recommendedProblems.map((rec) => (
                  <Link key={rec.problemId} href={`/problems/${rec.problemId}`}>
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex-1">
                        <p className="font-medium">{rec.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {rec.reason}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="capitalize">
                          {rec.difficulty}
                        </Badge>
                        <Button size="sm">Start</Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Study Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Personalized Study Plan</CardTitle>
              <CardDescription>
                A 4-week plan to master your weak topics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {analysis.studyPlan.map((week) => (
                  <div key={week.weekNumber} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">
                        Week {week.weekNumber}
                      </h3>
                      <Badge variant="outline">
                        {week.estimatedHours}h estimated
                      </Badge>
                    </div>
                    <div className="pl-4 border-l-2 border-primary/20 space-y-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          Topics to Cover:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {week.topics.map((topic) => (
                            <Badge key={topic} variant="secondary">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          Practice Problems:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {week.problemIds.map((id) => (
                            <Link key={id} href={`/problems/${id}`}>
                              <Badge
                                variant="outline"
                                className="hover:bg-primary hover:text-primary-foreground cursor-pointer"
                              >
                                Problem {id}
                              </Badge>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Ready to Improve?</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Start working on your recommended problems today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Link href="/problems">
                  <Button variant="secondary">
                    Browse All Problems
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Back to Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* TODO Note for Developers */}
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-sm font-mono">
                Developer Note
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs font-mono text-muted-foreground space-y-2">
              <p>
                TODO: This page currently uses mock data. Replace with actual
                AI-powered analysis:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Connect to /api/analysis/user endpoint</li>
                <li>Implement ML model for weakness detection</li>
                <li>Add real-time progress tracking</li>
                <li>Integrate personalized recommendation engine</li>
                <li>Add adaptive study plan generation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

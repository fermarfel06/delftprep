"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUserStore } from "@/lib/store/userStore";
import { fetchProblemById, submitProblem } from "@/lib/api/problems";
import { Problem } from "@/lib/store/problemsStore";

export default function ProblemDetailPage() {
  const { isAuthenticated } = useUserStore();
  const router = useRouter();
  const params = useParams();
  const problemId = params.id as string;

  const [problem, setProblem] = useState<Problem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    const loadProblem = async () => {
      setIsLoading(true);
      try {
        // TODO: Replace with actual API call to GET /api/problems/[id]
        const data = await fetchProblemById(problemId);
        setProblem(data);
      } catch (error) {
        console.error("Error loading problem:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProblem();
  }, [isAuthenticated, problemId, router]);

  const handleSubmit = async (solved: boolean) => {
    if (!problem) return;

    setSubmitting(true);
    setFeedback("");

    try {
      // TODO: Replace with actual API call to POST /api/problems/[id]/submit
      const response = await submitProblem({
        problemId: problem.id,
        solved,
      });

      setFeedback(response.message);
      if (solved) {
        setShowSolution(true);
      }
    } catch (error) {
      setFeedback("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <p className="text-center text-muted-foreground">Loading problem...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!problem) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center space-y-4">
            <h1 className="text-2xl font-bold">Problem Not Found</h1>
            <p className="text-muted-foreground">
              The problem you're looking for doesn't exist.
            </p>
            <Link href="/problems">
              <Button>Back to Problems</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const subjectLabels = {
    math: "Mathematics",
    physics: "Physics",
    introAE: "Intro Aerospace",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground">
            <Link href="/problems" className="hover:text-primary">
              Problems
            </Link>
            <span className="mx-2">/</span>
            <span>{problem.title}</span>
          </div>

          {/* Problem Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-4xl font-bold">{problem.title}</h1>
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

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="capitalize">
                {subjectLabels[problem.subject]}
              </Badge>
              {problem.topics.map((topic) => (
                <Badge key={topic} variant="outline">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          {/* Problem Statement */}
          <Card>
            <CardHeader>
              <CardTitle>Problem Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="whitespace-pre-wrap">{problem.statement}</p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Your Answer</CardTitle>
              <CardDescription>
                Mark whether you solved this problem correctly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Button
                  onClick={() => handleSubmit(true)}
                  disabled={submitting}
                  className="flex-1"
                >
                  {submitting ? "Submitting..." : "Mark as Solved"}
                </Button>
                <Button
                  onClick={() => handleSubmit(false)}
                  disabled={submitting}
                  variant="outline"
                  className="flex-1"
                >
                  Mark as Wrong
                </Button>
              </div>

              {feedback && (
                <div
                  className={`p-4 rounded-md text-sm ${
                    feedback.includes("Correct")
                      ? "bg-primary/10 border border-primary/20"
                      : "bg-destructive/10 border border-destructive/20"
                  }`}
                >
                  {feedback}
                </div>
              )}

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowHint(!showHint)}
                  className="flex-1"
                >
                  {showHint ? "Hide Hint" : "Show Hint"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowSolution(!showSolution)}
                  className="flex-1"
                >
                  {showSolution ? "Hide Solution" : "Show Solution"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Hint */}
          {showHint && (
            <Card>
              <CardHeader>
                <CardTitle>Hint</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{problem.hint}</p>
              </CardContent>
            </Card>
          )}

          {/* Solution */}
          {showSolution && (
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Solution</CardTitle>
                <CardDescription>
                  Detailed step-by-step solution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <p className="whitespace-pre-wrap">{problem.solution}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            <Link href="/problems">
              <Button variant="outline">Back to Problems</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">Go to Dashboard</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

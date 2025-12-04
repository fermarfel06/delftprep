import problemsData from '@/data/problems.json';
import { Problem } from '@/lib/store/problemsStore';

// TODO: Replace these mock functions with actual API calls

export interface ProblemSubmission {
  problemId: string;
  answer?: string;
  solved: boolean;
}

export interface SubmissionResponse {
  correct: boolean;
  message: string;
  solution?: string;
}

/**
 * Mock fetch all problems
 * TODO: Replace with actual API call to GET /api/problems
 */
export async function fetchProblems(): Promise<Problem[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  return problemsData as Problem[];
}

/**
 * Mock fetch single problem by ID
 * TODO: Replace with actual API call to GET /api/problems/[id]
 */
export async function fetchProblemById(id: string): Promise<Problem | null> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 200));

  const problem = problemsData.find((p) => p.id === id);
  return problem ? (problem as Problem) : null;
}

/**
 * Mock fetch problem solution
 * TODO: Replace with actual API call to GET /api/problems/[id]/solution
 */
export async function fetchProblemSolution(id: string): Promise<{
  solution: string;
  hint: string;
}> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const problem = problemsData.find((p) => p.id === id);

  if (!problem) {
    throw new Error('Problem not found');
  }

  return {
    solution: problem.solution,
    hint: problem.hint,
  };
}

/**
 * Mock submit problem answer
 * TODO: Replace with actual API call to POST /api/problems/[id]/submit
 */
export async function submitProblem(
  submission: ProblemSubmission
): Promise<SubmissionResponse> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 400));

  // Mock response - in real implementation, this would validate the answer
  return {
    correct: submission.solved,
    message: submission.solved
      ? 'Correct! Great work!'
      : 'Not quite right. Try again or check the solution.',
  };
}

/**
 * Mock fetch problems by topic
 * TODO: Replace with actual API call to GET /api/problems?topic=[topic]
 */
export async function fetchProblemsByTopic(topic: string): Promise<Problem[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const filtered = problemsData.filter((p) =>
    p.topics.includes(topic.toLowerCase())
  );

  return filtered as Problem[];
}

/**
 * Mock fetch problems by difficulty
 * TODO: Replace with actual API call to GET /api/problems?difficulty=[difficulty]
 */
export async function fetchProblemsByDifficulty(
  difficulty: 'easy' | 'medium' | 'hard'
): Promise<Problem[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const filtered = problemsData.filter((p) => p.difficulty === difficulty);

  return filtered as Problem[];
}

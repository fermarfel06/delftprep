export interface User {
  id: string;
  email: string;
  name: string;
  tier: 'starter' | 'enhanced' | 'complete';
  progress: {
    totalProblems: number;
    solvedProblems: number;
    accuracy: number;
    topicAccuracy: {
      topic: string;
      correct: number;
      total: number;
      accuracy: number;
    }[];
  };
  recentActivity: {
    problemId: string;
    problemTitle: string;
    solved: boolean;
    date: string;
  }[];
}

export const mockUser: User = {
  id: "1",
  email: "student@example.com",
  name: "John Doe",
  tier: "enhanced",
  progress: {
    totalProblems: 150,
    solvedProblems: 87,
    accuracy: 78.5,
    topicAccuracy: [
      { topic: "mechanics", correct: 15, total: 20, accuracy: 75 },
      { topic: "kinematics", correct: 18, total: 20, accuracy: 90 },
      { topic: "aerodynamics", correct: 12, total: 18, accuracy: 66.7 },
      { topic: "calculus", correct: 20, total: 25, accuracy: 80 },
      { topic: "linear algebra", correct: 14, total: 15, accuracy: 93.3 },
      { topic: "orbital mechanics", correct: 8, total: 12, accuracy: 66.7 },
    ],
  },
  recentActivity: [
    {
      problemId: "1",
      problemTitle: "Projectile Motion Basics",
      solved: true,
      date: "2024-11-20",
    },
    {
      problemId: "2",
      problemTitle: "Lift Coefficient Calculation",
      solved: true,
      date: "2024-11-19",
    },
    {
      problemId: "4",
      problemTitle: "Orbital Velocity",
      solved: false,
      date: "2024-11-18",
    },
    {
      problemId: "8",
      problemTitle: "Bernoulli's Equation",
      solved: true,
      date: "2024-11-17",
    },
    {
      problemId: "6",
      problemTitle: "Differential Equations - First Order",
      solved: false,
      date: "2024-11-16",
    },
  ],
};

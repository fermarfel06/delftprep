import { create } from 'zustand';

export interface Problem {
  id: string;
  title: string;
  subject: 'math' | 'physics' | 'introAE';
  difficulty: 'easy' | 'medium' | 'hard';
  topics: string[];
  statement: string;
  solution: string;
  hint: string;
}

interface ProblemFilters {
  subject: string;
  difficulty: string;
  topic: string;
  search: string;
}

interface ProblemsState {
  problems: Problem[];
  filters: ProblemFilters;
  isLoading: boolean;
  setProblems: (problems: Problem[]) => void;
  setFilters: (filters: Partial<ProblemFilters>) => void;
  resetFilters: () => void;
  fetchProblems: () => Promise<void>;
  getFilteredProblems: () => Problem[];
}

const initialFilters: ProblemFilters = {
  subject: 'all',
  difficulty: 'all',
  topic: 'all',
  search: '',
};

export const useProblemsStore = create<ProblemsState>((set, get) => ({
  problems: [],
  filters: initialFilters,
  isLoading: false,

  setProblems: (problems) => set({ problems }),

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),

  resetFilters: () => set({ filters: initialFilters }),

  // TODO: Replace with actual API call to /api/problems
  fetchProblems: async () => {
    set({ isLoading: true });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    try {
      const problemsData = await import('@/data/problems.json');
      set({ problems: problemsData.default as Problem[], isLoading: false });
    } catch (error) {
      console.error('Error fetching problems:', error);
      set({ isLoading: false });
    }
  },

  getFilteredProblems: () => {
    const { problems, filters } = get();

    return problems.filter((problem) => {
      const matchesSubject =
        filters.subject === 'all' || problem.subject === filters.subject;
      const matchesDifficulty =
        filters.difficulty === 'all' || problem.difficulty === filters.difficulty;
      const matchesTopic =
        filters.topic === 'all' || problem.topics.includes(filters.topic);
      const matchesSearch =
        filters.search === '' ||
        problem.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        problem.statement.toLowerCase().includes(filters.search.toLowerCase());

      return matchesSubject && matchesDifficulty && matchesTopic && matchesSearch;
    });
  },
}));

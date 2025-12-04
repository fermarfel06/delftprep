import { create } from 'zustand';
import { User } from '@/data/mockUser';

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  // TODO: Replace with actual API call to /api/auth/login
  login: async (email: string, password: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock login - always succeeds for demo
    const { mockUser } = await import('@/data/mockUser');
    set({ user: { ...mockUser, email }, isAuthenticated: true });
  },

  logout: () => {
    // TODO: Replace with actual API call to /api/auth/logout
    set({ user: null, isAuthenticated: false });
  },

  // TODO: Replace with actual API call to /api/auth/register
  register: async (email: string, password: string, name: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock registration - always succeeds for demo
    const { mockUser } = await import('@/data/mockUser');
    set({
      user: { ...mockUser, email, name },
      isAuthenticated: true
    });
  },
}));

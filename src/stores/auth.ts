import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  token?: string;
};

type AuthActions = {
  setToken: (token: string) => void;
  logout: () => void;
};

const initialState: AuthState = {
  token: undefined,
};

export const useAuthStore = create(
  persist<AuthState & AuthActions>(
    (set) => ({
      ...initialState,
      setToken: (token: string) => set({ token }),
      logout: () => set({ ...initialState }),
    }),
    {
      name: 'auth',
    }
  )
);

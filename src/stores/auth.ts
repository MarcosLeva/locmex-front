import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  token?: string;
  isAuth: boolean;
};

type AuthActions = {
  login: (token: string) => void;
  logout: () => void;
};

const initialState: AuthState = {
  token: undefined,
  isAuth: false,
};

export const useAuthStore = create(
  persist<AuthState & AuthActions>(
    (set) => ({
      ...initialState,
      login: (token: string) => set({ token, isAuth: true }),
      logout: () => set({ ...initialState }),
    }),
    {
      name: 'auth',
    }
  )
);

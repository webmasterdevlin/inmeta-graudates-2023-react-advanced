import { produce } from 'immer';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import type { Draft } from 'immer';

export type ThemeModel = {
  isDark: boolean;
  user: string;
};

export type ThemeStoreType = {
  theme: ThemeModel; // this is a state
  setLightTheme: () => void; // this is for mutating states
  setDarkTheme: () => void; // this is for mutating states
};

export const useThemeStore = create<ThemeStoreType>((set, get) => {
  const theme = {
    isDark: false,
    user: 'John Doe',
  }; // useState ----> useStore

  // without immer
  const setLightTheme = () => {
    return set(_ => {
      return {
        theme: { ...get().theme, isDark: false },
      };
    });
  };
  // with immer library
  const setDarkTheme = () => {
    return set(
      produce((draft: Draft<ThemeStoreType>) => {
        draft.theme.isDark = true;
      }),
    );
  };

  return {
    setDarkTheme,
    setLightTheme,
    theme,
  };
});

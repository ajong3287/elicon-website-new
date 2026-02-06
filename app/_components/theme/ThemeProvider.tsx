'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system" // Dark Mode 2.0: 시스템 설정 자동 감지
      enableSystem={true}
      enableColorScheme={true} // color-scheme meta tag 자동 설정
      disableTransitionOnChange={false}
      themes={['light', 'dark']}
      storageKey="elicon-theme" // localStorage key
    >
      {children}
    </NextThemesProvider>
  );
}

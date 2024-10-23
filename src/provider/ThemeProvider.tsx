'use client'

import { ReactNode } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
	<NextThemeProvider
		attribute="class"
		defaultTheme="light"
		enableColorScheme={true}
		themes={['light', 'dark', 'system']}
	>
		{children}
	</NextThemeProvider>
)

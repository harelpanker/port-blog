'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/lib/theme-toggle';

export default function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
	const { theme } = useContext(ThemeContext);
	return <div data-theme={theme}>{children}</div>;
}

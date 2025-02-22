'use client';

import { useState, createContext, useEffect } from 'react';

type ThemeContextType = {
	theme: string;
	toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
	theme: 'nord',
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState('nord');
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		const storedTheme = localStorage.getItem('theme') || 'nord';
		setTheme(storedTheme);
	}, []);

	if (!isMounted) {
		return null;
	}

	const toggleTheme = () => {
		const newTheme = theme === 'nord' ? 'dim' : 'nord';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

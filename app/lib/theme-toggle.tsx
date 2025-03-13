'use client';

import { useState, createContext, useEffect } from 'react';

type ThemeContextType = {
	theme: string;
	toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
	theme: 'dim',
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState('dim');
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		const storedTheme = localStorage.getItem('theme') || 'dim';
		setTheme(storedTheme);
	}, []);

	if (!isMounted) {
		return null;
	}

	const toggleTheme = () => {
		const newTheme = theme === 'dim' ? 'nord' : 'dim';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

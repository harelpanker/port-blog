'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/lib/theme-toggle';
import { Children } from '@/app/types/children';

export default function PageWrapper({ children }: Children) {
	const { theme } = useContext(ThemeContext);

	return (
		<div data-theme={theme} className='min-h-dvh flex w-full flex-col justify-between overflow-clip'>
			{children}
		</div>
	);
}

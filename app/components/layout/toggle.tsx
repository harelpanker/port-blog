'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/lib/theme-toggle';
import SunIcon from '@/app/components/layout/footer/sun-icon';
import MoonIcon from '@/app/components/layout/footer/moon-icon';

export default function Toggle() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<label className='toggle text-base-content'>
			<input
				type='checkbox'
				value='synthwave'
				checked={theme === 'dim'}
				className='theme-controller'
				onChange={() => toggleTheme()}
			/>
			<SunIcon />
			<MoonIcon />
		</label>
	);
}

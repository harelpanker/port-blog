'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/lib/theme-toggle';
import SunIcon from '@/app/components/layout/footer/sun-icon';
import MoonIcon from '@/app/components/layout/footer/moon-icon';

export default function Footer() {
	const { toggleTheme } = useContext(ThemeContext);

	return (
		<footer className='footer bg-base-300 text-base-content relative z-30 p-4'>
			<aside className='flex w-full flex-wrap items-center justify-between gap-x-2'>
				<p>Copyright © {new Date().getFullYear()} - All right reserved by Port.io Industries Ltd</p>

				<label className='toggle text-base-content'>
					<input type='checkbox' value='synthwave' className='theme-controller' onChange={() => toggleTheme()} />
					<SunIcon />
					<MoonIcon />
				</label>
			</aside>
		</footer>
	);
}

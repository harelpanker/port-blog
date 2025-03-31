'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '@/app/ui/container';
import MobileIcon from '@/app/components/layout/navbar/mobile-icon';
import NavbarCTA from '@/app/components/layout/navbar/navbar-cta';
import NavbarLogo from '@/app/components/layout/navbar/navbar-logo';
import { useWindowScroll } from '@mantine/hooks';

const menuItems: { label: string; href: string }[] = [
	{ label: 'Port.io', href: 'https://www.port.io/' },
	{ label: 'Join Us', href: 'https://www.port.io/careers' },
];

const MenuItem = ({ label, href }: { label: string; href: string }) => {
	return (
		<li>
			{href.includes('https') ? (
				<a href={href} target='_blank' rel='noopener noreferrer'>
					{label}
				</a>
			) : (
				<Link href={href}>{label}</Link>
			)}
		</li>
	);
};

export default function Navber() {
	const [scroll] = useWindowScroll();
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		if (scroll.y > 50) {
			if (scroll.y > lastScrollY) {
				setIsVisible(false);
			} else if (scroll.y < lastScrollY) {
				setIsVisible(true);
			}
		} else {
			setIsVisible(true);
		}

		setLastScrollY(scroll.y);
	}, [scroll.y, lastScrollY]);

	return (
		<div
			className={`${!isVisible ? '-translate-y-full' : 'translate-y-0'} ${
				scroll.y > 10
					? 'border-base-200 bg-base-100/60 backdrop-blur-sm'
					: 'bg-base-100 border-transparent backdrop-blur-none'
			} navbar transition-border-color sticky top-0 z-50 border-b transition-transform duration-300`}>
			<Container className='flex items-center'>
				<div className='navbar-start gap-x-2'>
					<div className='dropdown'>
						<MobileIcon />
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
							{menuItems.map((item) => (
								<MenuItem key={item.label} label={item.label} href={item.href} />
							))}
						</ul>
					</div>
					<NavbarLogo />
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1'>
						{menuItems.map((item) => (
							<MenuItem key={item.label} label={item.label} href={item.href} />
						))}
					</ul>
				</div>
				<NavbarCTA />
			</Container>
		</div>
	);
}

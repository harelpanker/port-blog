import Link from 'next/link';

export default function NavbarLogo() {
	return (
		<Link className='btn btn-ghost relative -left-4 text-xl' href='/'>
			PortIO <span className='hidden md:inline'>dev blog</span>
		</Link>
	);
}

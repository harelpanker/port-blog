import Container from '@/app/ui/container';
import MobileIcon from '@/app/components/layout/navbar/mobile-icon';
import NavbarCTA from '@/app/components/layout/navbar/navbar-cta';
import NavbarLogo from './navbar/navbar-logo';

export default function Navber() {
	return (
		<div className='navbar bg-base-100 sticky top-0 z-50'>
			<Container className='flex items-center'>
				<div className='navbar-start gap-x-2'>
					<div className='dropdown'>
						<MobileIcon />
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
							<li>
								<a>Item 1</a>
							</li>
							<li>
								<details>
									<summary>Parent</summary>
									<ul className='min-w-max p-2'>
										<li>
											<a>Submenu 1</a>
										</li>
										<li>
											<a>Submenu 2</a>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<a>Item 3</a>
							</li>
						</ul>
					</div>
					<NavbarLogo />
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<details>
								<summary>Parent</summary>
								<ul className='min-w-max p-2'>
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<NavbarCTA />
			</Container>
		</div>
	);
}

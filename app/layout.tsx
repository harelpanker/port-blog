import type { Metadata } from 'next';
import { dm_sans, spack_grotesk } from '@/app/lib/fonts';
import { Children } from '@/app/types/children';
import { layoutMetadata } from '@/app/lib/layout-metadata';
import PageWrapper from '@/app/ui/page-wrapper';
import Section from '@/app/ui/section';
import Footer from '@/app/components/layout/footer';
import Navber from '@/app/components/layout/navbar';
import './globals.css';

export const metadata: Metadata = layoutMetadata;

export default function RootLayout({ children }: Readonly<Children>) {
	return (
		<html lang='en' dir='ltr' className={`${dm_sans.variable} ${spack_grotesk.variable}`}>
			<body className={`font-dm-sans antialiased`}>
				<PageWrapper>
					<div className='flex grow flex-col'>
						<Navber />
						<Section element='main'>{children}</Section>
					</div>
					<Footer />
				</PageWrapper>
			</body>
		</html>
	);
}

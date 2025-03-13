import type { Metadata } from 'next';
import { dm_sans, spack_grotesk } from '@/app/lib/fonts';
import { Children } from '@/app/types/children';
import { layoutMetadata } from '@/app/lib/layout-metadata';
import PageWrapper from '@/app/ui/page-wrapper';
import Section from '@/app/ui/section';
import Footer from '@/app/components/layout/footer';
import Navber from '@/app/components/layout/navbar';
import { ThemeProvider } from '@/app/lib/theme-toggle';
import './globals.css';

const SITE_URL = 'https://productmanagement.port.io/';
const SITE_TITLE = 'Product management @ Port';
const SITE_DESCRIPTION = 'Product management, building developer tools, and the challenges along the way.';

export const metadata: Metadata = {
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	generator: 'Next.js',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	creator: 'Port.io',
	keywords: [
		'Product Management',
		'Product Manager Blog',
		'Product Strategy',
		'Roadmap Planning',
		'User Research',
		'Developer Experience',
		'Platform Engineering',
		'DevOps Product Management',
		'Internal Developer Platform',
		'API Product Management',
		'Developer Tooling',
		'Scaling Platform Teams',
		'Stakeholder Management',
		'Prioritization Frameworks',
		'Data-Driven Product Management',
		'Technical Debt in Product',
		'Product Management for Developers',
		'Building Developer Tools',
		'Lessons from a Product Manager',
		'Best Practices in Platform PM',
	],
	metadataBase: new URL(SITE_URL),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
		},
	},
	openGraph: {
		type: 'website',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		siteName: 'panker.dev',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({ children }: Readonly<Children>) {
	return (
		<html lang='en' dir='ltr' className={`${dm_sans.variable} ${spack_grotesk.variable} scroll-smooth`}>
			<body className={`font-dm-sans antialiased`}>
				<ThemeProvider>
					<PageWrapper>
						<div className='flex grow flex-col'>
							<Navber />
							<Section element='main'>{children}</Section>
						</div>
						<Footer />
					</PageWrapper>
				</ThemeProvider>
			</body>
		</html>
	);
}

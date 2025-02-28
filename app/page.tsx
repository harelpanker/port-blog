import SectionHero from '@/app/components/home-page/section-hero';
import { fetchPages } from '@/app/lib/notion';

export default async function Home() {
	const posts = await fetchPages();

	return (
		<>
			<SectionHero />
		</>
	);
}

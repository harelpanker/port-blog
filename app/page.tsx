import SectionHero from '@/app/components/home-page/section-hero';
import { fetchPages } from '@/app/lib/notion';
import Link from 'next/link';

export default async function Home() {
	const posts = await fetchPages();

	// console.log(posts.results[0].properties.slug.rich_text[0].plain_text);

	return (
		<>
			<SectionHero />
			<ul>
				{posts.results.map((post) => (
					<li key={post.id}>
						{/* <Link href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}>
							{post.properties.Name.title[0].plain_text}
						</Link> */}
					</li>
				))}
			</ul>
		</>
	);
}

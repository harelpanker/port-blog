// page.tsx - post page
import SectionBody from '@/app/components/post-page/section-body';
import SectionHero from '@/app/components/post-page/section-hero';
import { notFound } from 'next/navigation';
import SectionReadMore from '@/app/components/layout/section-read-more';
import { getData, getRelatedPosts } from '@/app/lib/get-post-data';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
	const params = await props.params;
	const post = await getData(params.slug);

	if (!post) return notFound();

	return {
		title: post.seoTitle,
		description: post.seoDescription,
		alternates: {
			canonical: post.canonical ? post.canonical : `https://productmanagement.port.io/posts/${post.slug}`,
		},
		openGraph: {
			images: [
				{
					url: post.image.url,
					width: post.image.width,
					height: post.image.height,
				},
			],
		},
	};
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
	const params = await props.params;

	const { slug } = params;

	const post = await getData(slug);

	if (!post) return notFound();

	const relatedPosts = await getRelatedPosts(post.id);

	return (
		<div className='flex flex-col gap-y-14'>
			<article className='relative flex flex-col gap-y-12 pb-14 pt-4 lg:py-16'>
				<SectionHero
					slug={slug}
					title={post.title}
					author={post.author}
					description={post.description}
					date={post.publishedAt}
				/>
				<SectionBody tags={post.tag} body={post.body} image={post.image} title={post.title} />
			</article>
			<SectionReadMore showTitle array={relatedPosts} />
		</div>
	);
}

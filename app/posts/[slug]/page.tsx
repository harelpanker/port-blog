import SectionBody from '@/app/components/post-page/section-body';
import SectionHero from '@/app/components/post-page/section-hero';
import { HygraphClient } from '@/app/lib/client';
import { singlePost } from '@/app/lib/queries/single-post';
import { Post } from '@/app/types/single-post';
import { notFound } from 'next/navigation';

// https://github.com/hygraph/hygraph-nextjs-blog-starter/blob/main/src/app/posts/%5Bslug%5D/page.jsx
// https://nextjs.org/docs/messages/sync-dynamic-apis

async function getData(slug: string): Promise<Post> {
	const client = HygraphClient();

	const variables = { slug: slug };

	const { post }: { post: Post } = await client.request(singlePost, variables);
	return post;
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
	const params = await props.params;
	const post = await getData(params.slug);

	if (!post) return notFound();

	return {
		title: post.seoTitle,
		description: post.seoDescription,
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

	return (
		<article className='relative flex flex-col gap-y-12 py-14 lg:py-24'>
			<SectionHero slug={slug} title={post.title} description={post.description} />
			<SectionBody tags={post.tag} author={post.author} body={post.body} image={post.image} title={post.title} />
		</article>
	);
}

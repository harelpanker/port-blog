import { notFound } from 'next/navigation';
import { fetchBySlug, fetchPageBlocks } from '@/app/lib/notion';

export default async function BlogPage({ params }: { params: { slug: string } }) {
	const post = await fetchBySlug(params.slug);
	console.log(post);

	if (post === undefined) notFound();

	// const content = await fetchPageBlocks(post.slug);

	return <div>{params.slug}</div>;
}

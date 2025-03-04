import SectionBody from '@/app/components/post-page/section-body';
import SectionHero from '@/app/components/post-page/section-hero';
import { HygraphClient } from '@/app/lib/client';
import { singlePost } from '@/app/lib/queries/single-post';
import { Post } from '@/app/types/single-post';

async function getData(slug: string): Promise<Post> {
	const client = HygraphClient();

	const variables = { slug: slug };

	const { post }: { post: Post } = await client.request(singlePost, variables);
	return post;
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
	const post = await getData(slug);
	return (
		<article className='flex flex-col gap-y-12 p-14 lg:py-24'>
			<SectionHero title={post.title} description={post.description} image={post.image} />
			<SectionBody body={post.body} />
		</article>
	);
}

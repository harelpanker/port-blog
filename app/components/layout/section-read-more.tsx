import { Post } from '@/app/types/all-posts';
import Container from '@/app/ui/container';
import PostCard from '@/app/ui/post-card';
import Section from '@/app/ui/section';

export default function SectionReadMore({ array }: { array: Post[] }) {
	return (
		<Section>
			<Container>
				<ul className='flex flex-col gap-6 lg:grid lg:grid-cols-3'>
					{array.map((post) => (
						<PostCard key={post.slug} {...post} />
					))}
				</ul>
			</Container>
		</Section>
	);
}

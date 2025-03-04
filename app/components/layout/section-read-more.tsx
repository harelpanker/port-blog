import { Post } from '@/app/types/all-posts';
import Container from '@/app/ui/container';
import PostCard from '@/app/ui/post-card';
import Section from '@/app/ui/section';

export default function SectionreadMore({ array }: { array: Post[] }) {
	return (
		<Section>
			<Container>
				<ul>
					{array.map((post) => (
						<PostCard key={post.slug} {...post} />
					))}
				</ul>
			</Container>
		</Section>
	);
}

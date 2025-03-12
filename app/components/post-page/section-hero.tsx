import Container from '@/app/ui/container';
import { Heading } from '@/app/ui/heading';
import Section from '@/app/ui/section';
import { Text } from '@/app/ui/text';
import Link from 'next/link';
import Arrow from '@/app/components/post-page/section-hero/arrow';
import SharePost from '@/app/components/post-page/section-body/share-post';

type Props = {
	title: string;
	description: string;
	slug: string;
};

export default function SectionHero({ title, description, slug }: Props) {
	return (
		<Section>
			<Container className='flex flex-col gap-y-6 lg:gap-y-12'>
				<div className='flex'>
					<Link href='/' className='btn btn-ghost'>
						<Arrow /> Back
					</Link>
				</div>
				<div className='flex flex-col gap-y-3'>
					<Heading level={1}>{title}</Heading>
					<Text className='max-w-prose xl:text-xl'>{description}</Text>
				</div>
				<SharePost title={title} slug={slug} />
			</Container>
		</Section>
	);
}

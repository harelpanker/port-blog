import Container from '@/app/ui/container';
import { Heading } from '@/app/ui/heading';
import Section from '@/app/ui/section';
import { Text } from '@/app/ui/text';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/app/components/post-page/section-hero/arrow';
import SharePost from '@/app/components/post-page/section-body/share-post';

type Props = {
	title: string;
	description: string;
	slug: string;
	image: {
		url: string;
		width: number;
		height: number;
	};
};

export default function SectionHero({ title, description, image, slug }: Props) {
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
				<figure className='relative aspect-video w-full overflow-hidden rounded-2xl lg:rounded-3xl'>
					<Image
						className='h-full w-full object-cover'
						loading='eager'
						src={image.url}
						alt={title}
						width={image.width}
						height={image.height}
					/>
				</figure>
				<SharePost title={title} slug={slug} />
			</Container>
		</Section>
	);
}

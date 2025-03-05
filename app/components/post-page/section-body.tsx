import Section from '@/app/ui/section';
import Container from '@/app/ui/container';
import { Author } from '@/app/types/author';
import { Tag } from '@/app/types/tag';
import Aside from '@/app/components/post-page/section-body/aside';

type Props = {
	body: {
		html: string;
	};
	tags: Tag[];
	author: Author[];
};

export default function SectionBody({ body, tags, author }: Props) {
	return (
		<Section>
			<Container className='flex flex-col gap-y-6 lg:grid lg:grid-cols-4 lg:gap-x-14'>
				<div className='order-last lg:order-none'>
					<Aside tags={tags} author={author} />
				</div>
				<div className='prose xl:prose-xl mx-auto lg:col-span-3' dangerouslySetInnerHTML={{ __html: body.html }}></div>
			</Container>
		</Section>
	);
}

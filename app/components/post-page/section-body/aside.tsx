import Tags from '@/app/components/layout/tags';
import Author from '@/app/components/layout/author';
import { Author as AuthorProps } from '@/app/types/author';
import { Tag } from '@/app/types/tag';
import TableOfContents from '@/app/components/post-page/section-body/table-of-contents';
import { useViewportSize } from '@mantine/hooks';

type Props = { tags: Tag[]; author: AuthorProps[]; html: string };

export default function Aside({ tags, author, html }: Props) {
	const desktopSize = 1024;
	const { width } = useViewportSize();
	return (
		<aside className='bg-base-200 border-base-300 flex max-h-[80dvh] flex-col gap-y-12 overflow-y-auto rounded-xl p-6 lg:sticky lg:top-24'>
			{width > desktopSize ? <TableOfContents html={html} /> : null}
			<Author authors={author} />
			{width > desktopSize ? <Tags array={tags} /> : null}
		</aside>
	);
}

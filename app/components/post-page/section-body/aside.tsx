import Tags from '@/app/components/layout/tags';
import Author from '@/app/components/layout/author';
import { Author as AuthorProps } from '@/app/types/author';
import { Tag } from '@/app/types/tag';

type Props = { tags: Tag[]; author: AuthorProps[] };

export default function Aside({ tags, author }: Props) {
	return (
		<aside className='bg-base-200 border-base-300 flex flex-col gap-y-12 rounded-xl p-6 lg:sticky lg:top-24'>
			<Author authors={author} />
			<Tags array={tags} />
		</aside>
	);
}

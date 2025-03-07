import { Tag } from '@/app/types/tag';

export default function Tags({ array }: { array: Tag[] }) {
	return (
		<ul className='flex flex-wrap gap-2'>
			{array.map((tag) => (
				<li key={tag.slug} className='badge uppercase'>
					#{tag.name}
				</li>
			))}
		</ul>
	);
}

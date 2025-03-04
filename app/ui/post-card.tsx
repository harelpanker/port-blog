import Image from 'next/image';
import { ButtonLink } from '@/app/ui/link';
import { Post } from '@/app/types/all-posts';

export default function PostCard({ title, description, image, slug }: Post) {
	return (
		<li>
			<article className='card bg-base-100 w-96 shadow-sm'>
				<figure>
					<Image src={image.url} alt={title} width={image.width} height={image.height} />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{title}</h2>
					<p>{description}</p>
					<div className='card-actions justify-end'>
						<ButtonLink href={`/posts/${slug}`}>Read more</ButtonLink>
					</div>
				</div>
			</article>
		</li>
	);
}

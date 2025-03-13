'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Section from '@/app/ui/section';
import Container from '@/app/ui/container';
import { Author } from '@/app/types/author';
import { Tag } from '@/app/types/tag';
import Aside from '@/app/components/post-page/section-body/aside';

type Props = {
	title: string;
	body: {
		html: string;
	};
	tags: Tag[];
	author: Author[];
	image: {
		url: string;
		width: number;
		height: number;
	};
};

export default function SectionBody({ body, tags, author, image, title }: Props) {
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (contentRef.current) {
			const headings = contentRef.current.querySelectorAll('h2, h3');
			headings.forEach((heading) => {
				if (!heading.id) {
					heading.id = heading.textContent?.trim().toLowerCase().replace(/\s+/g, '-') || '';
				}
			});
		}
	}, [body.html]);

	return (
		<Section>
			<Container className='flex flex-col gap-y-6 lg:grid lg:grid-cols-6 lg:gap-x-14 2xl:grid-cols-4'>
				<div className='order-last lg:order-none lg:col-span-2 2xl:col-span-1'>
					<Aside tags={tags} author={author} html={body.html} />
				</div>
				<div className='flex flex-col gap-y-6 lg:col-span-4 2xl:col-span-3'>
					<figure className='relative mx-auto aspect-video w-full max-w-prose overflow-hidden rounded-2xl lg:rounded-3xl 2xl:max-w-[55.625rem]'>
						<Image
							className='h-full w-full object-cover'
							loading='eager'
							src={image.url}
							alt={title}
							width={image.width}
							height={image.height}
						/>
					</figure>
					<div
						ref={contentRef}
						className='prose prose-h2:scroll-mt-14 prose-h3:scroll-mt-14 prose-img:rounded-xl 2xl:prose-xl mx-auto'
						dangerouslySetInnerHTML={{ __html: body.html }}></div>
				</div>
			</Container>
		</Section>
	);
}

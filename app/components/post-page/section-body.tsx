'use client';

import React, { useEffect, useRef } from 'react';
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
			<Container className='flex flex-col gap-y-6 lg:grid lg:grid-cols-4 lg:gap-x-14'>
				<div className='order-last lg:order-none'>
					<Aside tags={tags} author={author} html={body.html} />
				</div>
				<div
					ref={contentRef}
					className='prose prose-h2:scroll-mt-12 prose-h3:scroll-mt-12 prose-img:rounded-xl xl:prose-xl mx-auto lg:col-span-3'
					dangerouslySetInnerHTML={{ __html: body.html }}></div>
			</Container>
		</Section>
	);
}

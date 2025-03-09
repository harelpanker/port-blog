import { Heading } from '@/app/ui/heading';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface TOCItem {
	id: string;
	text: string;
	level: number;
}

interface TableOfContentsProps {
	html: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ html }) => {
	const [headings, setHeadings] = useState<TOCItem[]>([]);

	useEffect(() => {
		// Parse HTML to get headings
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		const headingElements = doc.querySelectorAll('h2, h3');

		const items: TOCItem[] = [];

		headingElements.forEach((heading) => {
			const id = heading.id || heading.textContent?.trim().toLowerCase().replace(/\s+/g, '-') || '';

			if (!heading.id) {
				heading.id = id;
			}

			items.push({
				id,
				text: heading.textContent || '',
				level: parseInt(heading.tagName.substring(1)),
			});
		});

		setHeadings(items);
	}, [html]);

	if (headings.length === 0) {
		return null;
	}

	return (
		<div className='flex flex-col gap-y-4'>
			<Heading className='!text-xl' level={2}>
				Table of Contents
			</Heading>
			<ul className='group space-y-2'>
				{headings.map((heading, index) => (
					<li key={index} style={{ marginLeft: `${(heading.level - 1) * 0.85}rem` }}>
						<Link
							className='transition-opacity duration-300 hover:!opacity-100 group-hover:opacity-60'
							href={`#${heading.id}`}>
							{heading.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TableOfContents;

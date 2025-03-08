'use client';

import { useState, useEffect } from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon,
	RedditShareButton,
	RedditIcon,
} from 'next-share';
import { Heading } from '@/app/ui/heading';

export default function SharePost({ slug, title }: { slug: string; title: string }) {
	const [url, setUrl] = useState('');

	useEffect(() => {
		setUrl(`${window.location.origin}/posts/${slug}`);
	}, [slug]);

	return (
		<div className='flex items-center gap-x-4'>
			<Heading level={3} className='!text-base'>
				Share:
			</Heading>
			<ul className='flex gap-x-4'>
				<li className='flex'>
					<FacebookShareButton url={url} quote={title}>
						<FacebookIcon size={32} round />
					</FacebookShareButton>
				</li>

				<li className='flex'>
					<RedditShareButton url={url} title={title}>
						<RedditIcon size={32} round />
					</RedditShareButton>
				</li>

				<li className='flex'>
					<LinkedinShareButton url={url}>
						<LinkedinIcon size={32} round />
					</LinkedinShareButton>
				</li>
			</ul>
		</div>
	);
}

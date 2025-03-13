'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ButtonLink } from '@/app/ui/link';
import { Post } from '@/app/types/all-posts';
import { GlowEffect } from '@/app/ui/glow-effect';

export default function PostCard({ title, description, image, slug }: Post) {
	const [hover, setHover] = useState(false);

	return (
		<li className='relative mx-auto w-96 max-w-full'>
			<motion.div
				className='pointer-events-none absolute inset-0'
				animate={{
					opacity: hover ? 1 : 0,
				}}
				transition={{
					duration: 0.4,
					ease: 'easeOut',
				}}>
				<GlowEffect
					colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
					mode='flowHorizontal'
					blur='medium'
					duration={4}
					className='rounded-2xl'
				/>
			</motion.div>
			<article className='card bg-base-100 h-full w-full shadow-sm'>
				<figure>
					<Image src={image.url} alt={title} width={image.width} height={image.height} />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{title}</h2>
					<p>{description}</p>
					<div
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						className='card-actions justify-end pt-4'>
						<ButtonLink href={`/posts/${slug}`}>Read more</ButtonLink>
					</div>
				</div>
			</article>
		</li>
	);
}

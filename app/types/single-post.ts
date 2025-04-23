import { Author } from '@/app/types/author';
import { Tag } from '@/app/types/tag';

export interface Post {
	id: string;
	publishedAt: string;
	title: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	description: string;
	canonical: string | null;
	image: {
		url: string;
		width: number;
		height: number;
	};
	tag: Tag[];
	author: Author[];
	body: {
		html: string;
	};
}

export interface SinglePostsResponse {
	posts: Post[];
}

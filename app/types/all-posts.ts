import { Tag } from '@/app/types/tag';

export interface Post {
	title: string;
	slug: string;
	description: string;
	tag: Tag[];
	image: {
		url: string;
		width: number;
		height: number;
	};
}

export interface AllPostsResponse {
	posts: Post[];
}

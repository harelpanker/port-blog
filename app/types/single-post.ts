export interface Post {
	title: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	image: {
		url: string;
		width: number;
		height: number;
	};
	tag: {
		name: string;
		slug: string;
	}[];
	author: {
		name: string;
		slug: string;
		title: string;
		linkedin: string;
		image: {
			url: string;
			width: number;
			height: number;
		};
	};
	body: {
		html: string;
	};
}

export interface SinglePostsResponse {
	posts: Post[];
}

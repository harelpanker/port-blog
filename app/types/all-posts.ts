export interface Post {
	title: string;
	slug: string;
	description: string;
	image: {
		url: string;
		width: number;
		height: number;
	};
}

export interface AllPostsResponse {
	posts: Post[];
}

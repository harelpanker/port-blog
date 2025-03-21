import { HygraphClient } from "@/app/lib/client";
import { Post } from "@/app/types/single-post";
import { AllPostsResponse } from "@/app/types/all-posts";
import { RelatedPosts } from "@/app/lib/queries/related-posts";
import { singlePost } from "@/app/lib/queries/single-post";

export async function getData(slug: string): Promise<Post> {
  const client = HygraphClient();

  const variables = { slug: slug };

  const { post }: { post: Post } = await client.request(singlePost, variables);
  return post;
}

export async function getRelatedPosts(postId: string) {
  const client = HygraphClient();
  const variables = { currentPostId: postId };
  const data = await client.request<AllPostsResponse>(RelatedPosts, variables);
  return data.posts;
}

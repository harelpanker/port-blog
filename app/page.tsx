import SectionHero from "@/app/components/home-page/section-hero";
import { HygraphClient } from "@/app/lib/client";
import { AllPosts } from "@/app/lib/queries/all-posts";
import { AllPostsResponse, Post } from "@/app/types/all-posts";
import SectionReadMore from "@/app/components/layout/section-read-more";

async function getPosts(): Promise<Post[]> {
  const client = HygraphClient();
  const allPosts = await client.request<AllPostsResponse>(AllPosts);
  return allPosts.posts;
}

export default async function Home() {
  const allPosts = await getPosts();

  return (
    <>
      <SectionHero />
      <SectionReadMore array={allPosts} />
    </>
  );
}

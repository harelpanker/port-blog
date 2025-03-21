import { Post } from "@/app/types/all-posts";
import Container from "@/app/ui/container";
import { Heading } from "@/app/ui/heading";
import PostCard from "@/app/ui/post-card";
import Section from "@/app/ui/section";

export default function SectionReadMore({
  array,
  showTitle = false,
}: {
  array: Post[];
  showTitle?: boolean;
}) {
  return (
    <Section>
      <Container className="flex !max-w-7xl flex-col gap-y-12">
        {showTitle ? <Heading>Read More</Heading> : null}
        <ul className="flex flex-col gap-x-6 gap-y-14 lg:grid lg:grid-cols-3 lg:gap-y-16">
          {array.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}

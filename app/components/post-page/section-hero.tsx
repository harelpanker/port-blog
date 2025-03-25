import Link from "next/link";
import Container from "@/app/ui/container";
import { Heading } from "@/app/ui/heading";
import Section from "@/app/ui/section";
import { Text } from "@/app/ui/text";
import { Author as AuthorType } from "@/app/types/author";
import Arrow from "@/app/components/post-page/section-hero/arrow";
import SharePost from "@/app/components/post-page/section-body/share-post";
import Author from "../layout/author";
import { formatDate } from "@/app/lib/formatDate";

type Props = {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: AuthorType[];
};

export default function SectionHero({
  title,
  description,
  slug,
  date,
  author,
}: Props) {
  return (
    <Section>
      <Container className="flex flex-col gap-y-6 lg:gap-y-12">
        <div className="flex">
          <Link href="/" className="btn btn-ghost">
            <Arrow /> Back
          </Link>
        </div>
        <div className="flex flex-col gap-y-3">
          <Heading level={1}>{title}</Heading>
          <Text className="max-w-prose xl:text-xl">{description}</Text>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <Author authors={author} />
            <div>{formatDate(date)}</div>
          </div>
          <SharePost title={title} slug={slug} />
        </div>
      </Container>
    </Section>
  );
}

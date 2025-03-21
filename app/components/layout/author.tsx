import Image from "next/image";
import {
  Author as AuthorProps,
  Author as AuthorsProps,
} from "@/app/types/author";
import { Heading } from "@/app/ui/heading";
import { Text } from "@/app/ui/text";

export default function Author({ authors }: { authors: AuthorsProps[] }) {
  return (
    <ul className="flex flex-col gap-y-3">
      {authors.map((author: AuthorProps) => (
        <li key={author.slug} className="flex items-center gap-x-3">
          <div className="avatar">
            <figure className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
              <Image
                src={author.image.url}
                alt={`${author.name}, ${author.title}`}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
            </figure>
          </div>
          <div className="flex flex-col">
            <Heading className="!text-lg" level={3}>
              {author.name}
            </Heading>
            <Text className="!text-sm">{author.title}</Text>
          </div>
        </li>
      ))}
    </ul>
  );
}

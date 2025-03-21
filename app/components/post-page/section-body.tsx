"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Section from "@/app/ui/section";
import Container from "@/app/ui/container";
import { Tag } from "@/app/types/tag";
import Aside from "@/app/components/post-page/section-body/aside";

import parse from "html-react-parser";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "./section-body/style.css";

type Props = {
  title: string;
  body: {
    html: string;
  };
  tags: Tag[];
  image: {
    url: string;
    width: number;
    height: number;
  };
};

export default function SectionBody({ body, tags, image, title }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2, h3");
      headings.forEach((heading) => {
        if (!heading.id) {
          heading.id =
            heading.textContent?.trim().toLowerCase().replace(/\s+/g, "-") ||
            "";
        }
      });
    }
  }, [body.html]);

  useEffect(() => {
    if (contentRef.current) {
      hljs.highlightAll(); // ✅ Automatically highlights all code blocks inside the component
    }
  }, [body.html]);

  return (
    <Section>
      <Container className="flex flex-col gap-y-6 lg:grid lg:grid-cols-6 lg:gap-x-14 2xl:grid-cols-4">
        <div className="order-last lg:order-none lg:col-span-2 2xl:col-span-1">
          <Aside tags={tags} html={body.html} />
        </div>
        <div className="flex flex-col gap-y-6 lg:col-span-4 2xl:col-span-3">
          <figure className="relative mx-auto aspect-video w-full max-w-prose overflow-hidden rounded-2xl lg:rounded-3xl 2xl:max-w-[55.625rem]">
            <Image
              className="h-full w-full object-cover"
              loading="eager"
              src={image.url}
              alt={title}
              width={image.width}
              height={image.height}
            />
          </figure>
          <div
            className="prose prose-h2:scroll-mt-14 prose-h3:scroll-mt-14 prose-img:rounded-xl 2xl:prose-xl mx-auto"
            ref={contentRef}
          >
            {parse(body.html)}
          </div>
        </div>
      </Container>
    </Section>
  );
}

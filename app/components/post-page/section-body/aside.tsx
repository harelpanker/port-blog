import Tags from "@/app/components/layout/tags";
import { Tag } from "@/app/types/tag";
import TableOfContents from "@/app/components/post-page/section-body/table-of-contents";
import { useViewportSize } from "@mantine/hooks";

type Props = { tags: Tag[]; html: string };

export default function Aside({ tags, html }: Props) {
  const desktopSize = 1024;
  const { width } = useViewportSize();
  return (
    <aside className="bg-base-200 border-base-300 flex max-h-[80dvh] flex-col gap-y-12 overflow-y-auto rounded-xl p-6 lg:sticky lg:top-24">
      {width > desktopSize ? <TableOfContents html={html} /> : null}
      {width > desktopSize ? <Tags array={tags} /> : null}
    </aside>
  );
}

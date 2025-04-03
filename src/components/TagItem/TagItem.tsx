import Link from "next/link";
import { ProcessedTag } from "@/types";

interface TagItemProps {
  tag: ProcessedTag;
}

export function TagItem({ tag }: TagItemProps) {
  return (
    <Link href={`/tema/${tag.slug}`} role="listitem">
      {tag.text} ({tag.count})
    </Link>
  );
}

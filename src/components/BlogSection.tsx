import React from "react";

import { allContents } from "contentlayer/generated";
import Link from "next/link";

export default function BlogSection() {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {allContents
        .filter((content) => content.slug.startsWith("/blogs"))
        .map((blog) => (
          <Link
            key={blog._id}
            href={blog.slug}
            className="inline-block grow basis-52 overflow-hidden rounded-md border-wrapper p-4 duration-200 hover:bg-code-figcaption active:bg-background dark:hover:border-white"
          >
            <span>{blog.title}</span>
            <span className="mt-1 line-clamp-2 text-sm text-muted">
              {blog.body.raw.replaceAll("#", "")}
            </span>
          </Link>
        ))}
    </div>
  );
}

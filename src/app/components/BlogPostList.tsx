'use client'

import Link from "next/link";

import { useEffect, useState } from "react";

import { BlogPostMetadata } from "../blog/[slug]/page";
import BlogPostTypeComponent from "./BlogPostType";

export default function BlogPostList() {
    const [content, setContent] = useState({posts:[]});

    useEffect(() => {
        fetch("/blog/posts/blog-posts-2024.json")
            .then((res) => res.json())
            .then((text) => setContent(text));
    }, []);


    return (
        <div className="flex flex-col ">
                {
                    content.posts.slice(0, 20).map((post: BlogPostMetadata) => (
                        <div key={post.slug} className="py-10">
                            <section className="inline-flex flex-wrap">
                                <Link className="text-5xl" href="/blog/[slug]" as={`/blog/${post.slug}`}>{post.title}</Link>
                                <div className="inline-flex items-end ml-5">
                                    <BlogPostTypeComponent propType={post.type} />
                                    <h4 className="text-secondary px-3" >{post.timestamp}</h4>
                                </div>

                            </section>

                            <h4 className="text-2xl mt-3" >{post.description}</h4>
                            <ContentPreview content={post.content} slug={post.slug} />


                        </div>
                    ))
                }
            </div>
    );
}

interface ContentPreview {
    content: string
    slug: string
}

function ContentPreview(props: ContentPreview) {
    const {content, slug} = props;

    if (content === undefined || content === "") {
        return
    }

    return (
        <section className="flex flex-row mt-4" >
            <p className="text-lg">{content.match(/^.{100}\w*/)}...</p>
            <Link className="text-lg text-secondary ml-4" href="/blog/[slug]" as={`/blog/${slug}`}>Read more</Link>
        </section>
    );
}
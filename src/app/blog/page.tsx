import { Metadata } from "next";

import Title from "../components/Title";
import Link from "next/link";

import { promises as fs } from "fs"
import { BlogPostMetadata } from "./[slug]/page";
import BlogPostTypeComponent from "../components/BlogPostType";

export const metadata: Metadata = {
    title: "Blog - Mitchell Coovert",
    description: "Blog posts written by Mitchell Coovert on mitchell.coovert.ca",
};



export default async function Blog() {
    const file = await fs.readFile(process.cwd() + '/src/app/blog/posts/blog-posts-2024.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <div>
            <Title text="my blog." />

            <p className="page-description">
                this is just for me to dump my general opinions, and recommendations.
            </p>
            <div className="flex flex-col ">
                {
                    data.posts.slice(0, 20).map((post: BlogPostMetadata) => (
                        <div key={post.slug} className="p-10 pl-20">
                            <section className="inline-flex flex-wrap">
                                <Link className="text-5xl" href="/blog/[slug]" as={`/blog/${post.slug}`}>{post.title}</Link>
                                <div className="inline-flex items-end">
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
        </div>
    );
}

function ContentPreview(props: any) {
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
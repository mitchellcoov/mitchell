import Title from "@/app/components/Title";

import { promises as fs } from "fs"
import { notFound } from "next/navigation";
import BlogPostTypeComponent from "@/app/components/BlogPostType";

export interface BlogPostMetadata {
    slug: string,
    title: string,
    timestamp: string,
    description: string,
    content: string,
    type: string,
}


export default async function BlogPost({params}: {params: {slug: string}}) {
    const file = await fs.readFile(process.cwd() + '/src/app/blog/posts/blog-posts-2024.json', 'utf8');
    const data = JSON.parse(file);

    const post: BlogPostMetadata | undefined = data.posts.find((post: BlogPostMetadata) => post.slug === params.slug);

    if (post === undefined) {
        notFound()
    }

    return (
        <div>
            <Title text={`${post.title}.`} />
            <h2 className="page-description" >{post.description}</h2>
            <div className="flex flex-row ml-20 m-5 pl-5 items-center">
                <BlogPostTypeComponent propType={`${post.type}`} />
                <h4 className="" >{post.timestamp}</h4>
            </div>


            <p className="paragraph" >{post.content}</p>
        </div>
    );
}

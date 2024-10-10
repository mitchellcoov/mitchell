'use client'
import Title from "@/app/components/Title";
import BlogPostTypeComponent from "@/app/components/BlogPostType";

import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

export interface BlogPostMetadata {
    slug: string,
    title: string,
    timestamp: string,
    description: string,
    content: string,
    type: string,
}

const emptyBlog: BlogPostMetadata = {
    slug: "",
    title: "",
    timestamp: "",
    description: "",
    content: "",
    type: ""
}

export default function BlogPost({ params }: { params: { slug: string } }) {

    const [content, setContent] = useState("");
    const [meta, setMeta] = useState<BlogPostMetadata>(emptyBlog);

    useEffect(() => {
        fetchPosts();
    }, [])

    useEffect(() => {
        fetchPage();
    }, [params.slug]);



    const fetchPage = async () => {
        const res = await fetch("/blog/posts/" + params.slug + ".md");
        const text = await res.text();
        setContent(text);
    }

    const fetchPosts = async () => {
        const res = await fetch("/blog/posts/blog-posts-2024.json");
        const json = await res.json();
        const post: BlogPostMetadata = json.posts.find((index: BlogPostMetadata) => index.slug === params.slug)
        setMeta(post);
    }

    if (meta === undefined) {
        notFound();
    }

    return (
        <div>
            <Title text={`${meta.title}.`} />
            <section className="inline-flex flex-wrap items-center" >
                <h2 className="page-description mr-5 " >{meta.description}</h2>
                <div className="flex flex-row my-5 items-center">
                    <BlogPostTypeComponent propType={`${meta.type}`} />
                    <h4 className="" >{meta.timestamp}</h4>
                </div>
            </section>


            <ReactMarkdown >
                {content}
            </ReactMarkdown>

        </div>
    );
}


// export default async function BlogPost({params}: {params: {slug: string}}) {
//     const file = await fs.readFile(process.cwd() + '/src/app/blog/posts/blog-posts-2024.json', 'utf8');
//     const data = JSON.parse(file);

//     const post: BlogPostMetadata | undefined = data.posts.find((post: BlogPostMetadata) => post.slug === params.slug);

//     if (post === undefined) {
//         notFound()
//     }

//     return (
//         <div>
//             <Title text={`${post.title}.`} />
//             <h2 className="page-description" >{post.description}</h2>
//             <div className="flex flex-row ml-20 m-5 pl-5 items-center">
//                 <BlogPostTypeComponent propType={`${post.type}`} />
//                 <h4 className="" >{post.timestamp}</h4>
//             </div>


//             <p className="paragraph" >{post.content}</p>
//         </div>
//     );
// }

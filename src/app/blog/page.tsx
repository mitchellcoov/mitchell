import { Metadata } from "next";

import Title from "../components/Title";
import BlogPostList from "../components/BlogPostList";

export const metadata: Metadata = {
    title: "Blog - Mitchell Coovert",
    description: "Blog posts written by Mitchell Coovert on mitchell.coovert.ca",
};

export default async function Blog() {
    

    return (
        <div>
            <Title text="my blog." />

            <p className="page-description">
                this is just for me to dump my general opinions, and recommendations.
            </p>

            <BlogPostList />
            
        </div>
    );
}


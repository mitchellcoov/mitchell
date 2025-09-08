import { Metadata } from "next";

import Title from "../components/Title";
// import BlogPostList from "../components/BlogPostList";

export const metadata: Metadata = {
    title: "Blog - Mitchell Coovert",
    description: "Blog posts written by Mitchell Coovert on mitchell.coovert.ca",
};

export default async function Blog() {
    

    return (
        <div className="flex flex-col items-center mb-16 mx-10 min-h-screen">
            <Title text="My Blog." />

            <h3 className="text-center">
                Not a critic, not a writer, just a person with thoughts.
            </h3>

            {/* <BlogPostList /> */}

            <h2 className="text-4xl mt-8">Coming Eventually...</h2>
            
        </div>
    );
}


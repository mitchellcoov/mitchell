'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";


export default function ProjectList() {
    const [content, setContent] = useState({projects:[]});

    useEffect(() => {
        fetch("/projects/projects.json")
            .then((res) => res.json())
            .then((text) => setContent(text));
    }, []);


    return (
        <div className="project-layout ">

            {
                content.projects.map((project: ProjectCard) => {

                    return (
                        <Link key={project.slug} className="" href="/projects/[slug]" as={`/projects/${project.slug}`}>
                            <span className="project-card ">
                            {
                                (project.image.length === 0 ? 
                                    <h2 className="">{project.title}</h2> 
                                    
                                    
                                : <span className='flex flex-col items-center'>
                                        <Image className="image-frame"
                                            priority
                                            src={project.image}
                                            alt={""}
                                            width={400} height={450} />
                                        <h4 className="">{project.title}</h4>
                                </span>)
                            }
                                <p className='project-card-description'>{project.description}</p>
                            </span>
                        </Link>
                    );
                })
            }
                
        </div>
    );
}

interface ProjectCard {
    slug: string
    title: string
    description: string
    image: string
}
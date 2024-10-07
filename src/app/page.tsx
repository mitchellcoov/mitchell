'use client'

import React from 'react';

import Image from 'next/image';

import Title from './components/Title';
import EmblaCarousel, { ImageDetails } from "./components/emblaCarousel";

export default function Home() {
    const personal: ImageDetails[] = [

        { style: "", src: "/about/wedding.jpg", alt: "Mitchell and partner Mable ", width: 300, height: 300 },
        { style: "", src: "/about/blue.jpg", alt: "Mitchell's dog Blue, a large black dog with beige snout and eyebrows", width: 300, height: 300 },
        { style: "", src: "/about/turbo.jpg", alt: "", width: 300, height: 300 },
        { style: "", src: "/about/wrigley.jpg", alt: "", width: 300, height: 300 },
        { style: "", src: "/about/oliver.jpg", alt: "", width: 300, height: 300 },
    ]

    return (
        <>
            <Title text="welcome! i'm mitchell." />

            <h3 className="text-5xl text-secondary ml-24 mb-8" >(he/him)</h3>
            <Image className="float-left ml-20 mr-8 p-2 bg-auto bg-secondary rounded-md"
                src="/about/profile_picture.jpg"
                alt="Picture of Mitchell Coovert. He is wearing a white floral dress shirt, and standing in front of atree of off white flowers. "
                width={250} height={250} />

            <p className="paragraph">
                i am a professional software developer with nearly 10 years of experience primarily in backend web development. 
                most of my experience is with java, but i have dabbled in various other languages over the years. 
                among the languages I&apos;ve worked with are: go, python, typescript, and sql. despite my focus on java, 
                i do love to learn and experience new languages and technologies. 
                software development is the perfect fit for me because it allows me to combine my want to be creative with, the ability to continously learn in
                an ever evolving technological landscape. 
            </p>
            
            <p className="paragraph">
                i am a fierce supporter of marginalized communities. my partner, mable, is a social work student at the university of windsor 
                and part of multiple marginalized communities, so I try to support them however i can. i am passionate about justice and equality for the groups who are oppressed. 
                one of my favourite hobbies is reading, particularly books to educate myself on the current world climate and culture.                 
            </p>

            <p className="paragraph">
                on a more personal note, i live in windsor, ontario. mable and i have been married since july 2023 and together we have three cats -wrigley, oliver, turbo - and one pup, blue. 
            </p>

            <div className="flex place-content-center">
                <EmblaCarousel details={personal} />
            </div>
            

            <p className="paragraph mb-24">
                hopefully, my website has helped you learn something about me. thanks for visiting! 
            </p>
        </>
    );
}

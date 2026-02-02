'use client'

import React from 'react';

import Image from 'next/image';

import Title from './components/Title';
import EmblaCarousel, { ImageDetails } from "./components/emblaCarousel";
import Link from 'next/link';
import ClickableImage from './components/ClickableImage';

export default function Home() {
    const personal: ImageDetails[] = [

        { style: "", src: "/about/wedding.jpg", alt: "Mitchell and partner Mable ", width: 300, height: 300 },
        { style: "", src: "/about/blue.jpg", alt: "Mitchell's dog Blue, a large black dog with beige snout and eyebrows", width: 300, height: 300 },
        { style: "", src: "/about/turbo.jpg", alt: "", width: 300, height: 300 },
        { style: "", src: "/about/wrigley.jpg", alt: "", width: 300, height: 300 },
        { style: "", src: "/about/oliver.jpg", alt: "", width: 500, height: 300 },
        { style: "", src: "/about/tubby_alien.jpg", alt: "", width: 300, height: 300 },
        { style: "", src: "/about/blue_mlem.jpg", alt: "", width: 300, height: 300 },
        { style: "", src: "/about/us.jpg", alt: "", width: 300, height: 300 },
        { style: "", src: "/about/oliver_window.jpg", alt: "", width: 300, height: 300 },
        { style: "", src: "/about/dq.jpg", alt: "", width: 500, height: 300 },
    ]

    return (
        <div className='flex flex-col gap-6 md:gap-0'>

            <div id="home" className="">
                <Title text="Welcome! I&apos;m Mitchell." />
                <h3 className="" >(he/him)</h3>
                <Image id="profile-picture" className="hidden md:block image-frame"
                    priority
                    src="/about/profile_picture.jpg"
                    alt="Picture of Mitchell Coovert. He is wearing a white floral dress shirt, and standing in front of a tree of off white flowers. "
                    width={400} height={450}/>
                <Image id="profile-picture" className="image-frame md:hidden"
                    priority
                    src="/about/profile_picture_mobile.jpg"
                    alt="Picture of Mitchell Coovert. He is wearing a white floral dress shirt, and standing in front of a tree of off white flowers. "
                    width={400} height={450}/>
            </div>
            

            <article id="About" className="mx-2 md:mx-16 pt-20">

                <h4 className='justify-self-center'>About</h4>

                <ClickableImage className="justify-self-center md:float-left" 
                    src="/about/blue_kiss.jpg"
                    alt="Picture of Mitchell Coovert. He is wearing a white floral dress shirt, and standing in front of a tree of off white flowers. "
                    width={250} height={450}/>

                <p className="paragraph">
                    I am a professional software developer with nearly 10 years of experience, primarily in backend web development. 
                    The largest portion of that time I have been creating Java web APIs. Though Java has been my primary language, I do 
                    love to learn new languages and technologies. Over the years, I have dabbled in Go, TypeScript, JavaScript, Python, 
                    and C++.
                </p>

                <p className="paragraph">
                    I also have significant experience in DevOps. I&apos;ve created and managed pipelines in Jenkins, and GitHub Actions. 
                    Administrated and optimized databases such as Elasticsearch, and SAP&apos;s S4/HANA. And so with that, I have been on a little 
                    bit of a quest as of late, to improve and round out my overall full-stack knowledge, getting to know and diving deeper 
                    into React, NextJS, TailwindCSS, Vite, Node, and Svelte.
                </p>

                <p className="paragraph">
                    I attended McMaster University in Hamilton, Ontario for software engineering. McMaster is one of the few universities in Ontario
                    that has a general engineering first year. You&apos;re required to take courses from a variety of different engineering 
                    disciplines. One of the classes was an introduction to Python and thatapos;s when I first found programming. I initially planned on becoming a chemical 
                    engineer but software development is a much better fit for me. It allows me to fulfill my need for solving logic and 
                    math based problems and puzzles but also to be creative designing user interfaces. Unfortunately, I have yet to finish 
                    my degree. I do plan on finishing it eventually but for now I am attending St. Clair College in pursuit of a diploma in 
                    computer programming.
                </p>
                <ClickableImage className="justify-self-center md:float-right"
                    src="/about/tubby_carpet.jpg"
                    alt="Picture of Mitchell Coovert. He is wearing a white floral dress shirt, and standing in front of a tree of off white flowers. "
                    width={250} height={450}/>

                <p className='paragraph'>
                    With my professional spiel out of the way, I&apos;d like to tell you a little bit more about me as a person. I am a 
                    vehement supporter of marginalized communities. In North America, LGBTQ+, people of colour, indigenous peoples have all 
                    been systemically oppressed and we must act to right the wrongs of those who came before us.  I support the people of 
                    Palestine and believe the Israeli government should be held responsible for the atrocities they are perpetrating. I also 
                    believe, now, more than ever before, we need to be acting on the very real danger that is climate change. 

                </p>
                
                <p className='paragraph'>
                    I love playing games, video games, board games, and TTRPGs. Some of my favourites of each are Crusader Kings 3, Oblivion, 
                    One Night Ultimate Werewolf, Settlers of Catan, and DnD/Pathfinder. I also love reading, mostly mystery/whodunits but 
                    also non-fiction, and classics. I do like a good hike but other than that I&apos;m very much a homebody.
                </p>
                <p className='paragraph'>
                    
                    My lovely wife Mable and I have four furbabies, Blue, Oliver, Wrigley, and Turbo. You can see a collection of pictures of all of us below. If 
                    you&apos;d like to check out some art that Mable has done please go over to their <Link className="text-white" href="https://mable.coovert.gay" target='_blank'>site</Link>.
                </p>
                <p className='paragraph'>
                    I hope you were able to learn a bit about me and I appreciate you stopping by my website.
                </p>
            </article>

            <div id="carrousel" className="flex place-content-center mt-16 bg-background-secondary">
                <EmblaCarousel details={personal} />
            </div>

        </div>
    );
}

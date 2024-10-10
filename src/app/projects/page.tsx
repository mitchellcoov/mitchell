import { Metadata } from "next";
import Image from "next/image";

import Title from "../components/Title";
import EmblaCarousel, { ImageDetails } from "../components/emblaCarousel";

export const metadata: Metadata = {
    title: "Projects - Mitchell Coovert",
    description: "Projects that Mitchell Coovert has worked on - mitchell.coovert.ca",
};


export default function Projects() {

    const hpImages: ImageDetails[] = [
        { style: "", src: "/projects/hp/hp_home.png", alt: "", width: 600, height: 600 },
        { style: "", src: "/projects/hp/hp_product.png", alt: "", width: 600, height: 600 },
        { style: "", src: "/projects/hp/hp_viewer.png", alt: "", width: 600, height: 600 },
    ]

    const siteImages: ImageDetails[] = [
        { style: "", src: "/projects/site/coovert_ca_screenshot.png", alt: "", width: 600, height: 600 },
        { style: "", src: "/projects/site/mitchell_home.png", alt: "", width: 600, height: 600 },

    ]

    return (
        <div>
            <Title text="my projects." />

            <p className="page-description inline-block">
                here are some of the projects I have worked on.
            </p>

            <p className="page-description" >
                if you&apos;d like to check out my resume
                <a className="max-w-8 m-2" href="/projects/Mitchell_Coovert_CV.pdf">
                    <Image className="hidden dark:inline" src="/projects/dark_download_icon.png" alt="" width={30} height={30} />
                    <Image className="dark:hidden inline" src="/projects/light_download_icon.png" alt="" width={30} height={30} />
                </a>
            </p>

            <div className="grid grid-cols-projectTitle project-title gap-3">
                <h2 className="">the SAP help portal</h2>
                <a className="text-secondary" href="https://help.sap.com"><h4 className="text-3xl">https://help.sap.com</h4></a>
                <nav className="grid grid-cols-5 max-w-56">
                    <a className="tech-logo" href="https://sap.com">
                        <Image className="hidden dark:block" src="/logos/dark_sap_icon.png" alt="SAP logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_sap_icon.png" alt="SAP logo" width={30} height={30} />
                    </a>
                    <a className="tech-logo" href="https://www.java.com/en/">
                        <Image className="hidden dark:block" src="/logos/dark_java_icon.png" alt="Java logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_java_icon.png" alt="Java logo" width={30} height={30} />
                    </a>
                    <a className="tech-logo" href="https://spring.io">
                        <Image className="hidden dark:block" src="/logos/dark_spring_icon.png" alt="Spring logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_spring_icon.png" alt="Spring logo" width={30} height={30} />
                    </a>
                    <a className="tech-logo" href="https://go.dev">
                        <Image className="hidden dark:block" src="/logos/dark_golang_icon.png" alt="NextJS logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_golang_icon.png" alt="NextJS logo" width={30} height={30} />
                    </a>
                    <a className="tech-logo" href="https://www.docker.com">
                        <Image className="hidden dark:block" src="/logos/dark_docker_icon.png" alt="SAP logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_docker_icon.png" alt="SAP logo" width={30} height={30} />
                    </a>

                </nav>

            </div>

            <div className="flex place-content-center">
                <EmblaCarousel details={hpImages} />
            </div>


            <p className="paragraph">
                i was part of a small team of developers who worked on the sap help portal website, serving documentation for sap&apos;s
                extensive catalog of products. i spent eight years on the same team and my responsibilities shifted over the course of that time.
                i started as an intern, working on mostly performance testing. after the internship ended i would then work on features and
                bug fixes but my main responsibilities were more devops focused, working with Jenkins and GitHub Actions. my responsibilities shifted again
                and i becamse responsible for creating services on my own. i created a variety of rest api services using varying technologies,
                most were java spring boot apps. i was given the opportunity to experiment and work with go, elasticsearch, docker, and kubernetes.
            </p>

            <p className="paragraph" >
                i thoroughly enjoyed my time at sap, thanks in no small part to my team and my manager. everyone i worked with was always kind and incredibly
                knowdledgable.
            </p>


            <div className="grid grid-cols-projectTitle project-title gap-3">
                <h2 className="">this site</h2>
                <a className="text-secondary" href="https://coovert.ca"><h4 className="text-3xl">https://coovert.ca</h4></a>
                <nav className="grid grid-cols-4 max-w-56">
                    <a className="tech-logo" href="https://react.dev">
                        <Image className="hidden dark:block" src="/logos/dark_react_native_icon.png" alt="React logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_react_native_icon.png" alt="React logo" width={30} height={30} />
                    </a>
                    <a className="tech-logo" href="https://www.typescriptlang.org">
                        <Image className="hidden dark:block" src="/logos/dark_typescript_icon.png" alt="Typescript logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_typescript_icon.png" alt="Typescript logo" width={30} height={30} />
                    </a>
                    <a className="tech-logo" href="https://tailwindcss.com">
                        <Image className="hidden dark:block" src="/logos/dark_tailwind_css_icon.png" alt="Tailwind CSS logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_tailwind_css_icon.png" alt="Tailwind CSS logo" width={30} height={30} />
                    </a>
                    <a className="tech-logo" href="https://nextjs.org">
                        <Image className="hidden dark:block" src="/logos/dark_nextjs_icon.png" alt="NextJS logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_nextjs_icon.png" alt="NextJS logo" width={30} height={30} />
                    </a>
                </nav>

            </div>

            <div className="flex place-content-center">
                <EmblaCarousel details={siteImages} />
            </div>

            <p className="paragraph">
                this site is a small project i decided to take on to get some more experience with some tech that i don&apos;t know very well.
                it also helped stave off boredom while being out of work. i created it using react (typescript), nextjs, and tailwindcss, all of which i&apos;ve never worked with before.
                in general, i&apos;m not overly experienced with frontend development but this was a fun project. react has been great to work with, and it was easy incorporating things
                like the embla carousel, for the images.
                the last frontend framework i tried to pick up was angular but i didn&apos;t enjoy it and found it unintuitive, unlike react. using typescript was also an improvement over javascript,
                i much prefer a statically typed language to a dynamically typed one.
                also i&apos;m not a designer but i&apos;m pretty happy with how it&apos;s turned out. i got some inspiration from a few designs i saw on the
                <a className="text-secondary" href="https://webflow.com/blog">webflow blog</a> but didn&apos;t use any specific templates.
            </p>

            <p className="paragraph">
                i&apos;ve had a personal site before but i let it become out of date and then took it down. this one is objectively better in every way seeing as i&apos;ve got a lot more experience under my belt.
                as of now my wife&apos;s portion of the site is unfinished but i think it should be up shortly. the next steps for this
                site are to make it mobile friendly and ensure it is fully accesible. if you&apos;d like to see the source code please visit my <a href="https://github.com/mitchellcoov" >github</a>.
            </p>

            <div className="grid grid-cols-projectTitle project-title gap-3">
                <h2 className="">school projects</h2>
                <a className="text-secondary" href="https://www.eng.mcmaster.ca/cas/degree-options/software-engineering/"><h4 className="text-3xl">https://www.eng.mcmaster.ca</h4></a>
                <nav className="grid grid-cols-3 max-w-40">
                    <a className="tech-logo" href="https://www.java.com/en/">
                        <Image className="hidden dark:block" src="/logos/dark_java_icon.png" alt="Java logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_java_icon.png" alt="Java logo" width={30} height={30} />
                    </a>
                    <a className="tech-logo" href="https://cplusplus.com">
                        <Image className="hidden dark:block" src="/logos/dark_c_plus_icon.png" alt="Java logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_c_plus_icon.png" alt="Java logo" width={30} height={30} />
                    </a>
                    <a className="tech-logo" href="https://www.python.org">
                        <Image className="hidden dark:block" src="/logos/dark_python_icon.png" alt="Java logo" width={30} height={30} />
                        <Image className="dark:hidden block" src="/logos/light_python_icon.png" alt="Java logo" width={30} height={30} />
                    </a>
                </nav>

            </div>

            <h4 className="project-title mt-10 text-4xl">self-driving car</h4>
            <p className="paragraph" >
                for my capstone project in my final year of university i was part of a team that worked on self driving capabilities.
                the capstone was part of collaboration between the university and an automotive company. the collaboration afforded us
                some benefits, such as the cars that we were working with, and the figure eight track that the cars were to drive on. the car was fitted
                with a camera, and a raspberry pi, to navigate. our task was to get the car to traverse the track and to stop at the middle intersection.
                we were able to build off of a previous teams work. the code we wrote was a mixture of c++ and python. we were able to get the car to
                move and turn, but we weren&apos;t able to get the car to take the camera input and turn it into reliable movement. in all, it was an interesting
                project but we didn&apos;t get the result we set out for from the beginning.
            </p>

            <h4 className="project-title text-4xl">sudoku</h4>

            <p className="paragraph" >
                this was a single term class project, that i worked on with two classmates. we created a sudoku game.
                it was written in java and used the swing library for the gui.
                it had a randomly generated board that was always solveable, it had multiple backgrounds and different music for each one.
                at the time of creating it i was super proud of the work we&apos;d and though i am proud now, if i made it again i would definitely take a different approach.
                it was quite a maximalist take on sudoku, adding more features than it needed, just for the sake of doing it. something that i didn't know 
                at the time of making it, is that there should only be one unique solution.
            </p>

        </div>
    );
}
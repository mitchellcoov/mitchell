'use client'

import { ReactTyped } from "react-typed";

interface TitleProps {
    text: string;
}

export default function Title({text} : TitleProps) {
    console.log("Creating title: " + text);
    return (
        <div className="text-8xl pt-10 pb-6">
            <ReactTyped 
                strings={[text]}
                startDelay={700}
                typeSpeed={80}
                ></ReactTyped>
        </div>
    );
}
'use client'

import { TypeAnimation } from "react-type-animation";

interface TitleProps {
    text: string;
}

export default function Title({text} : TitleProps) {
    return (
        <div>
            <TypeAnimation 
                className="text-8xl m-5 px-20 pt-10"
                sequence={[text, 1000]}
                wrapper='h1'
                speed={10}
                repeat={1}></TypeAnimation>
        </div>
    );
}
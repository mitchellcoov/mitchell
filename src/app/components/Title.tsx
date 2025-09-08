'use client'

import { ReactTyped } from "react-typed";

interface TitleProps {
    text: string;
}

export default function Title({text} : TitleProps) {
    return (
        <div className="h1">
            <ReactTyped 
                strings={[text]}
                startDelay={700}
                typeSpeed={80}
                ></ReactTyped>
        </div>
    );
}
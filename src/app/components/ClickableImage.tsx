'use client'
import { useState } from "react";

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { createPortal } from "react-dom";


export default function ClickableImage({ className, src, alt, width, height } : { className: string, src: string, alt: string, width: number, height?: number }) {

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Image className={`${className} image-frame cursor-pointer`}
                src={src}
                alt={alt}
                width={width} height={height || width}
                onClick={() => setExpanded(true)}/>

            {
                expanded && 
                createPortal(
                    <div className="fixed z-40 top-0 left-0 flex flex-col justify-center items-center h-svh w-full backdrop-blur-sm ">
                    <FontAwesomeIcon className="absolute z-50 cursor-pointer right-4 top-20" icon={faXmark} size="2xl" onClick={() => setExpanded(false)} />
                    <Image className="max-h-svh max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 
                        m-10 border-8 border-background-tertiary scale-125 md:scale-[1.4] lg:scale-[1.7] rounded-md"
                        src={src}
                        alt={alt}
                        width={width} height={height || width}
                        onClick={() => setExpanded(true)}/>
                </div>, document.body
                )
                
                
            }
            
        </>
    );
}
'use client'

import React from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './emblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';

export interface ImageDetails {
    style: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface ImageDetailsList {
    details: ImageDetails[];
}

const EmblaCarousel: React.FC<ImageDetailsList> = (props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    let gridCols:string, viewport:string;
    if (props.details.at(0)?.width == 300) {
        gridCols = "grid-cols-[50px_300px_50px]";
        viewport = "max-w-[300px]";
    } else {
        gridCols = "grid-cols-[50px_600px_50px]";
        viewport = "max-w-[600px]";
    }

    return (
        <section className={`embla ${gridCols}`}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <div className={`embla__viewport ${viewport}`} ref={emblaRef}>
                <div className="embla__container">
                    {props.details.map((index) => (
                        <div className="embla__slide" key={index.src}>
                            <Image className={index.style} src={index.src} alt={index.alt} width={index.width} height={index.height} />
                        </div>
                    ))}
                </div>
            </div>

            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

        </section>
    )
}

export default EmblaCarousel

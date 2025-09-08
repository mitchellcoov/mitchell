'use client'

import React from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './emblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import ClickableImage from './ClickableImage';

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

    return (
        <section className={`embla`}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <div className={`embla__viewport`} ref={emblaRef}>
                <div className="embla__container items-center">
                    {props.details.map((index) => (
                        <div className="embla__slide justify-items-center" key={index.src}>
                            <ClickableImage className={`${index.style}`} src={index.src} alt={index.alt} width={index.width} height={index.height} />
                        </div>
                    ))}
                </div>
            </div>

            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

        </section>
    )
}

export default EmblaCarousel

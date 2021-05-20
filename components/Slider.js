import stylesCarousel from '../styles/Carousel.module.css'
import CarouselSlide from './CarouselSlide'
import CarouselArrow from './CarouselArrow'
import { useState, useEffect, useRef } from 'react';


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = useState(["Hello", "Number two", "Cu de frango"])
    const { length } = slides

    const idRef = useRef();

    useEffect(() => {
        const timeout = setTimeout(goToNextSlide, 3000)
        idRef.current = timeout;

        return function () {
            clearTimeout(goToNextSlide)
        }
    })

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === length ? 0 : currentSlide + 1)

    }

    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length : currentSlide - 1)

    }

    const onClick = (e) => {
        e === "next" ? goToNextSlide() : goToPreviousSlide()
        clearTimeout(idRef.current)

    }

    return (
        <div className={`${stylesCarousel.carousel}`}>
            <CarouselArrow direction="left"
                onClick={() => onClick("prev")}
            />


            <CarouselSlide text={slides[0][currentSlide]} />

            <CarouselArrow direction="right"
                onClick={() => onClick("next")}
            />

        </div>
    )
}

export default Slider

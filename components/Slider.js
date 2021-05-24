import stylesCarousel from '../styles/Carousel.module.css'
import CarouselSlide from './CarouselSlide'
import CarouselArrow from './CarouselArrow'
import { useState, useEffect, useRef } from 'react';


const Slider = ({ allNews }) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const { length } = allNews
    console.log(allNews)
    const idRef = useRef();

    useEffect(() => {
        const timeout = setTimeout(goToNextSlide, 3000)
        idRef.current = timeout;

        return () => {
            clearTimeout(idRef.current)
        }
    })

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)

    }

    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)

    }

    const onClick = (e) => {
        e === "next" ? goToNextSlide() : goToPreviousSlide()
        console.log(currentSlide)
        clearTimeout(idRef.current)

    }

    return (
        <div className={`${stylesCarousel.carousel}`}>
            <CarouselArrow direction="left"
                onClick={() => onClick("prev")}
            />


            <CarouselSlide news={allNews[currentSlide]} />

            <CarouselArrow direction="right"
                onClick={() => onClick("next")}
            />

        </div>
    )
}

export default Slider

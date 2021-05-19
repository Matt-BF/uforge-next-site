import stylesCarousel from '../styles/Carousel.module.css'

const CarouselSlide = ({text}) => {

    return (
        <div className={`${stylesCarousel.galleryCell}`}>
            <p>{text}</p>
        </div>
    )
}

export default CarouselSlide

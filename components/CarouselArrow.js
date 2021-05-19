import stylesCarousel from '../styles/Carousel.module.css'

const CarouselArrow = ({ direction, onClick}) => {
    

    return (
        <div className={stylesCarousel.arrow} onClick={ onClick }><i className={`fas fa-angle-${direction} fa-3x`}></i>
        </div>
    )
}

export default CarouselArrow
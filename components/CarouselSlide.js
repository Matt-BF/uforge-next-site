import stylesCarousel from "../styles/Carousel.module.css";
import Link from "next/link";
const CarouselSlide = ({ news }) => {
  return (
    <Link href={news.link} as={news.link}>
      <a
        target="_blank"
        rel="noreferrer"
        className={`${stylesCarousel.galleryCell}`}
      >
        <div>
          <p>{news.title}</p>
          <p>{news.excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default CarouselSlide;

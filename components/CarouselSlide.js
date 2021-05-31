import stylesCarousel from "../styles/Carousel.module.css";
import Link from "next/link";
const CarouselSlide = ({ news }) => {
  return (
    <Link href="/carousel/[id]" as={`/carousel/${news.id}`}>
      <a className={`${stylesCarousel.galleryCell}`}>
        <div>
          <p>{news.title}</p>
          <p>{news.excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default CarouselSlide;

import stylesHero from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={stylesHero.container}>
      <img
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
        className={stylesHero.logo}
        src="/uforge_pb.png"
        alt="Picture of the author"
      ></img>
    </div>
  );
};

export default Hero;

import stylesHero from "../styles/Hero.module.css";

const Hero = ({ isHandheld }) => {
  return (
    <div className={stylesHero.container}>
      <img
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-anchor-placement={!isHandheld ? "top-center" : "top-center"}
        className={stylesHero.logo}
        src="/uforge_pb.png"
        alt="Picture of the author"
      ></img>
    </div>
  );
};

export default Hero;

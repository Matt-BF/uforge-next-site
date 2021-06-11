import stylesNavbar from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={`${stylesNavbar.navbar} ${stylesNavbar.flex} bg-primary`}>
        <img
          src="nav-right.jpeg"
          className={stylesNavbar.sideImgLeft}
          alt=""
        ></img>
        <img src="br_logo.jpeg" className={stylesNavbar.brImg} alt=""></img>
        <Link href="/">
          <a className={stylesNavbar.imgLink}>
            <img
              className={stylesNavbar.mainImg}
              src="uforge_full_navbar.png"
              alt="uForge"
            ></img>
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Produtos</Link>
            </li>
            <li>
              <Link href="/blog">Notícias</Link>
            </li>
          </ul>
        </nav>
        <img
          src="nav-left.jpeg"
          className={stylesNavbar.sideImgRight}
          alt=""
        ></img>
      </div>
    </>
  );
};

export default Navbar;

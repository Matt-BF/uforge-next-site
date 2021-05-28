import stylesNavbar from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={`${stylesNavbar.navbar} ${stylesNavbar.flex} bg-primary`}>
        <Link href="/">
          <a className={stylesNavbar.imgLink}>
            <img src="uforge_full_navbar.png" alt="uForge"></img>
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
              <Link href="/education">Educação</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

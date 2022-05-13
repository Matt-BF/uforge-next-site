import stylesNavbar from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={`${stylesNavbar.navbar} ${stylesNavbar.flex}`}>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Produtos</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

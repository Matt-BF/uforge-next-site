import stylesFooter from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={stylesFooter.footer}>
            <div class={`container ${stylesFooter.footerFlex} grid`}>
                <div>
                    <p>Copyright &copy; 2021</p>
                </div>
                <div className={stylesFooter.address}>
                    <p>Av. Prefeito Jose Lozano Araujo 1136 Bloco B</p>
                    <p>CEP 13140-556</p>
                </div>
                <nav className={stylesFooter.social}>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/company/%C2%B5forge/about/" target="_blank"
                                rel="noreferrer"><i className={`${stylesFooter.footerLink} fab fa-linkedin fa-2x`}></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/micro.forge/" target="_blank" rel="noreferrer"><i
                                className={`${stylesFooter.footerLink} fab fa-instagram fa-2x`}></i></a>
                        </li>
                        <li>
                            <a href="mailto:mbfiamenghi@gmail.com"><i className={`${stylesFooter.footerLink} fas fa-at fa-2x`}></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer

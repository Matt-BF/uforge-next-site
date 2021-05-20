import stylesDropdown from '../styles/Dropdown.module.css'
import Link from 'next/link'

const Dropdown = ({product }) => {
    return (
        <div className={`${stylesDropdown.productContent} grid-2`}>
            <img className={stylesDropdown.image} src={product.img} alt="" />
            <p className={stylesDropdown.description}>{product.description}</p>
            {product.subproducts.length > 0 && 
            <Link href='/product/[id]' as={`/product/${product.id}`}>
                <a style={{ "color": "var(--primary-color)" }}> Conheça a Linha!</a>
                </Link>}

            </div>
        
    )
}

export default Dropdown

import Product from './Product'
import stylesProductList from '../styles/ProductList.module.css'

const ProductList = ({ products }) => {
    return (
        <div className={stylesProductList.flex}>
            {
                products.map((product, idx) => (
                    <Product product={product} key={idx} />
                ))
            }
        </div >
    )

}

export default ProductList

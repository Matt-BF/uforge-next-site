import Product from './Product'
import stylesProductList from '../styles/ProductList.module.css'

const ProductList = ({products}) => {
    return (
        <div className={stylesProductList.flex}>
            {
                products.map((product, idx) => (
                    <Product product={product} />
                ))
            }
        </div >
    )

}

export default ProductList

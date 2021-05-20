import Product from './Product'
import stylesProductList from '../styles/ProductList.module.css'

const ProductList = () => {

    const products = [
        {
            "id": "1",
            "productTitle": "Kit Sabiá: Beads Magnéticas",
            "productImg": "logo_foxes_peq.png",
            "productDescription": "Lorem",
            "subproducts": [
                {
                    "id": "1",
                    "subproductTitle": "Kit Sabiá Leveduras",
                    "subproductDescription": ""
                },
                {
                    "id": "2",
                    "subproductTitle": "Kit Sabiá Amostras Limpas",
                    "subproductDescription": ""
                }
            ]
        },
        {
            "id": "2",
            "productTitle": "Ladder",
            "productImg": "",
            "productDescription": "Lorem 2",
            "subproducts": [
                {
                    "id": "1",
                    "subproductTitle": "Ladder 100bp",
                    "subproductDescription": ""
                }
            ]
        },
        {
            "id": "3",
            "productTitle": "Rack Magnética",
            "productImg": "",
            "productDescription": "Racks magnéticas top da galáxia",
            "subproducts": []
        }
    ]

    return (
        <div className={stylesProductList.flex}>
            {
                products.map((product, idx) => (
                    <Product key={idx} product={product} />
                ))
            }
        </div >
    )
}

export default ProductList

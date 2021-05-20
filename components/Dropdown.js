import stylesDropdown from '../styles/Dropdown.module.css'

const Dropdown = ({ productImg, productDescription, subproducts }) => {
    return (
        <div className={`${stylesDropdown.productContent} grid-2`}>
            <img className={stylesDropdown.image} src={productImg} alt="" />
            <p className={stylesDropdown.description}>{productDescription}</p>
            {subproducts.length > 0 && <p className={stylesDropdown.line}>Conheça a linha:</p>}
            <div className={stylesDropdown.subproductList}>
                {subproducts.map((subproduct, idx) => (
                    <a style={{ "color": "var(--primary-color)" }} key={idx} href="#"> {subproduct.subproductTitle}</a>
                ))
                }
            </div>
        </div >
    )
}

export default Dropdown

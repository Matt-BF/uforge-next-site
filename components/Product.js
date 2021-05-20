import ButtonDropdown from './ButtonDropdown'
import Dropdown from './Dropdown'
import { useState } from 'react'

const Product = ({ product }) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <ButtonDropdown productTitle={product.productTitle} onClick={() => setOpen(open => !open)} />
            {open && <Dropdown productImg={product.productImg} productDescription={product.productDescription} subproducts={product.subproducts} />}

        </div>
    )
}

export default Product

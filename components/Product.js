import ButtonDropdown from './ButtonDropdown'
import Dropdown from './Dropdown'
import { useState } from 'react'

const Product = ({ product }) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <ButtonDropdown productTitle={product.title} onClick={() => setOpen(open => !open)} />
            {open && <Dropdown product={product} />}

        </div>
    )
}

export default Product

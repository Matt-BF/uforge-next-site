import stylesButtonDropdown from '../styles/ButtonDropdown.module.css'

const ButtonDropdown = ({ onClick, productTitle }) => {
    return (
        <button onClick={onClick} type="button" className={stylesButtonDropdown.collapsible}>
            <p>{productTitle}</p>
        </button>

    )
}

export default ButtonDropdown

import ShopStyles from './Shop.module.css'

export default function Shop(props) {
    const handleClick = () => {
        props.setDisplayShop(!props.displayShop)
    }

    return (
        props.displayShop ? <div className={ShopStyles.div}>
            <h2>Coming Soon!</h2>
            <button 
                className={ShopStyles.button}
                onClick={handleClick}
            >Exit</button>
        </div> : null
    )
}
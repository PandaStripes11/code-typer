import Image from 'next/image'

export default function Icons(props) {
    const handleShopClick = () => {
        props.setDisplayShop(!props.displayShop)
    }

    const handleBattlePassClick = () => {
        props.setDisplayBattlePass(!props.displayBattlePass)
    }

    return (
        <aside>
            <button className="store" onClick={handleShopClick}>
                <Image 
                    src="/shopping-cart.png"
                    width={30}
                    height={30}
                />
                &nbsp;Store
            </button>
            <button className="battle-pass" onClick={handleBattlePassClick}>
                <Image
                    src="/battle-pass.png"
                    width={30}
                    height={30}
                />
                &nbsp;Battle Pass
            </button>
        </aside>
    )
}
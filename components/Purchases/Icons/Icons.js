import Image from 'next/image'

export default function Icons(props) {
    const handleShopClick = () => {
        props.setDisplayShop(!props.displayShop)
    }

    const handleBattlePassClick = () => {
        props.setDisplayBattlePass(!props.setDisplayBattlePass)
    }

    return (
        <aside>
            <button onClick={handleShopClick}>
                <Image 
                    src="/shopping-cart.png"
                    width={30}
                    height={30}
                    className="store"
                />
                &nbsp;Store
            </button>
            <button className="battle-pass" onClick={handleBattlePassClick}>
                <Image
                    src="/battle-pass.png"
                    width={30}
                    height={30}
                    className="battle-pass"
                />
                &nbsp;Battle Pass
            </button>
        </aside>
    )
}
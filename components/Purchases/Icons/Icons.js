import Image from 'next/image'

import {colors} from '../../../utils/colors'

export default function Icons(props) {
    const handleShopClick = () => {
        props.setDisplayShop(!props.displayShop)
    }

    const handleBattlePassClick = () => {
        props.setDisplayBattlePass(!props.displayBattlePass)
    }

    return (
        <aside>
            <button className="store" onClick={handleShopClick} style={colors.theme.icons}>
                <Image 
                    src={colors.theme.images.shop}
                    width={30}
                    height={30}
                />
                &nbsp;Store
            </button>
            <button className="battle-pass" onClick={handleBattlePassClick} style={colors.theme.icons}>
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
import {useState} from 'react'

import Icons from './Icons/Icons'
import Shop from './Shop/Shop'
import BattlePass from './BattlePass/BattlePass'

export default function Purchases(props) {
    const [displayShop, setDisplayShop] = useState(false)
    const [displayBattlePass, setDisplayBattlePass] = useState(false)

    return (
        <>
            <Icons 
                displayBattlePass={displayBattlePass}
                setDisplayBattlePass={setDisplayBattlePass}
                displayShop={displayShop}
                setDisplayShop={setDisplayShop}
            />
            <Shop
                displayShop={displayShop}
                setDisplayShop={setDisplayShop}
            />
            <BattlePass
                displayBattlePass={displayBattlePass}
                setDisplayBattlePass={setDisplayBattlePass}
            />
        </>
    )
}
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
                tbucks={props.cbucks}
                setTbucks={props.setCbucks}
                multiplier={props.multiplier}
                setMultiplier={props.setMultiplier}
                selectedTheme={props.selectedTheme}
                setSelectedTheme={props.setSelectedTheme}
                musicUrl={props.musicUrl}
                setMusicUrl={props.setMusicUrl}
                wpmBonus={props.wpmBonus}
                setWpmBonus={props.setWpmBonus}
                passiveIncome={props.passiveIncome}
                setPassiveIncome={props.setPassiveIncome}
            />
            <BattlePass
                displayBattlePass={displayBattlePass}
                setDisplayBattlePass={setDisplayBattlePass}
            />
        </>
    )
}
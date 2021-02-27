import UpgradesStyles from './Upgrades.module.css'

import {colors} from '../../../../utils/colors'

import Multipliers from './Multipliers/Multipliers'
import Menu from './Menu/Menu'
import Bonuses from './Bonuses/Bonuses'
import PassiveIncome from './PassiveIncome/PassiveIncome'

import { useState } from 'react'

export default function Upgrades(props) {
    const [displayPage, setDisplayPage] = useState('menu')

    const handleClick = () => {
        setDisplayPage("menu")
    }

    let page;
    if (displayPage === 'menu') {
        page = <Menu setDisplayPage={setDisplayPage}/>
    } else if (displayPage === 'multipliers') {
        page = <Multipliers 
                    setTbucks={props.setTbucks} 
                    tbucks={props.tbucks}
                    boughtMultipliers={props.boughtMultipliers}
                    setBoughtMultipliers={props.setBoughtMultipliers}
                    multiplier={props.multiplier}
                    setMultiplier={props.setMultiplier}
                />
    } else if (displayPage === 'bonuses') {
        page = <Bonuses 
            tbucks={props.tbucks}
            setTbucks={props.setTbucks}
            wpmBonus={props.wpmBonus}
            setWpmBonus={props.setWpmBonus}
            boughtWpmBonuses={props.boughtWpmBonuses}
            setBoughtWpmBonuses={props.setBoughtWpmBonuses}
        />
    } else if (displayPage === 'passiveIncome') {
        page = <PassiveIncome
            tbucks={props.tbucks}
            setTbucks={props.setTbucks}
            passiveIncome={props.passiveIncome}
            setPassiveIncome={props.setPassiveIncome}
            boughtPassiveIncomes={props.boughtPassiveIncomes}
            setBoughtPassiveIncomes={props.setBoughtPassiveIncomes}
        />
    }

    return (
        <section className={UpgradesStyles.upgrades}>
            <button className={UpgradesStyles.button} onClick={handleClick} style={{color: colors.theme.body.textColor}}>
                ◀
            </button>
            {page}
        </section>
    )
}
import UpgradesStyles from './Upgrades.module.css'

import Multipliers from './Multipliers/Multipliers'
import Menu from './Menu/Menu'
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
        page = <Multipliers setTbucks={props.setTbucks} tbucks={props.tbucks}/>
    }

    return (
        <section className={UpgradesStyles.upgrades}>
            <button className={UpgradesStyles.button} onClick={handleClick}>
                ◀
            </button>
            {page}
        </section>
    )
}
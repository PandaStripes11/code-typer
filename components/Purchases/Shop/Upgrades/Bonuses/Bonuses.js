import { useEffect, useState } from 'react'
import BonusesStyles from './Bonuses.module.css'

import BonusesIcon from './BonusesIcon/BonusesIcon'
import WpmBonus from './WpmBonus/WpmBonus'

export default function Bonuses(props) {
    const [currPage, setCurrPage] = useState("menu")

    let page;
    if (currPage === "menu") {
        page = (
            <section className={BonusesStyles.container}>
                <BonusesIcon
                    title="Words per Minute"
                    description="Boost the amount of WPM you get when you finish a passage"
                    src="/speedometer.png"
                    pageToDisplay="wpmbonuses"
                    setCurrPage={setCurrPage}
                />
                <BonusesIcon
                    title="Accuracy"
                    description="Boost the accuracy you receive when you finish a passage"
                    src="/target.png"
                    pageToDisplay="wpmbonuses"
                    setCurrPage={setCurrPage}
                />
            </section>
        )
    } else if (currPage === "wpmbonuses") {
        page = <WpmBonus
            tbucks={props.tbucks}
            setTbucks={props.setTbucks}
            wpmBonus={props.wpmBonus}
            setWpmBonus={props.setWpmBonus}
            boughtWpmBonuses={props.boughtWpmBonuses}
            setBoughtWpmBonuses={props.setBoughtWpmBonuses}
        />
        console.log(page)
    }

    return (
        <>
            {page}
        </>
    )
}
import ShopStyles from './Shop.module.css'

import Upgrades from './Upgrades/Upgrades'
import Themes from './Themes/Themes'
import FootNav from './FootNav/FootNav'

import Image from 'next/image'

import {MultiplierData} from '../../../utils/multiplierData'
import {useState} from 'react'

import {colors} from '../../../utils/colors'

import {themeColors} from '../../../utils/themeColors'

const themes = {}
for (let i = 0; i < themeColors.length; i++) {
    if (themeColors[i].name === "Default") {
        themes[themeColors[i].name] = true
        continue
    }
    themes[themeColors[i].name] = false
}

export default function Shop(props) {
    const [currPage, setCurrPage] = useState('upgrades')
    const [boughtMultipliers, setBoughtMultipliers] = useState(new Array(MultiplierData.length).fill(false))
    const [boughtThemes, setBoughtThemes] = useState(themes)

    const handleClick = () => {
        props.setDisplayShop(!props.displayShop)
    }

    let page;
    if (currPage === 'upgrades') {
        page = <Upgrades 
            tbucks={props.tbucks} 
            setTbucks={props.setTbucks} 
            multiplier={props.multiplier}
            setMultiplier={props.setMultiplier}
            boughtMultipliers={boughtMultipliers}
            setBoughtMultipliers={setBoughtMultipliers}
        />
    } else if (currPage === 'themes') {
        page = <Themes 
            tbucks={props.tbucks} 
            setTbucks={props.setTbucks}
            boughtThemes={boughtThemes}
            setBoughtThemes={setBoughtThemes}
            selectedTheme={props.selectedTheme}
            setSelectedTheme={props.setSelectedTheme}
        />
    }

    return (
        props.displayShop ? <div className={ShopStyles.div} style={colors.theme.shop.shopStyles}>
            <div className={ShopStyles.container}>
                <button className={ShopStyles.button} onClick={handleClick}>
                    <Image 
                        src={colors.theme.images.close}
                        height={50}
                        width={50}
                    />
                </button>
                {page}
                <FootNav 
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                />
            </div>
        </div> : null
    )
}
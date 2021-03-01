import ShopStyles from './Shop.module.css'

import Upgrades from './Upgrades/Upgrades'
import Themes from './Themes/Themes'
import FootNav from './FootNav/FootNav'
import Music from './Music/Music'

import Image from 'next/image'

import {MultiplierData} from '../../../utils/multiplierData'
import {wpmBonusesData} from '../../../utils/wpmBonusesData'
import {passiveIncomeData} from '../../../utils/passiveIncomeData'
import {useEffect, useState} from 'react'

import {colors} from '../../../utils/colors'

import {themeColors} from '../../../utils/themeColors'

import {music} from '../../../utils/music'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

const themes = {}
for (let i = 0; i < themeColors.length; i++) {
    if (themeColors[i].name === "Default") {
        themes[themeColors[i].name] = true
        continue
    }
    themes[themeColors[i].name] = false
}

const musicUrls = {}
for (let i = 0; i < music.length; i++) {
    if (music[i].name === "Default") {
        musicUrls[music[i].url] = true
        continue
    }
    musicUrls[music[i].url] = false
}

export default function Shop(props) {
    const [currPage, setCurrPage] = useState('upgrades')
    const [boughtMultipliers, setBoughtMultipliers] = useState(new Array(MultiplierData.length).fill(false))
    const [boughtWpmBonuses, setBoughtWpmBonuses] = useState(new Array(wpmBonusesData.length).fill(false))
    const [boughtPassiveIncomes, setBoughtPassiveIncomes] = useState(new Array(passiveIncomeData.length).fill(false))
    const [boughtThemes, setBoughtThemes] = useState(themes)
    const [boughtMusic, setBoughtMusic] = useState(musicUrls)

    useEffect(() => {
        cookies.get("boughtMultipliers") ? 
            setBoughtMultipliers([cookies.get('boughtMultipliers'), ...new Array(boughtMultipliers.length - cookies.get('boughtMultipliers').length).fill(false)]) :
            cookies.set("boughtMultipliers", boughtMultipliers, {path: "/", maxAge: 604800})
            setBoughtMultipliers(cookies.get('boughtMultipliers'))
        cookies.get("boughtWpmBonuses") ? 
            setBoughtWpmBonuses([cookies.get('boughtWpmBonuses'), ...new Array(boughtWpmBonuses.length - cookies.get('boughtWpmBonuses').length).fill(false)]) :
            cookies.set("boughtWpmBonuses", boughtWpmBonuses, {path: "/", maxAge: 604800})
            setBoughtWpmBonuses(cookies.get('boughtWpmBonuses'))
        cookies.get("boughtPassiveIncomes") ? 
            setBoughtPassiveIncomes([cookies.get('boughtPassiveIncomes'), ...new Array(boughtPassiveIncomes.length - cookies.get('boughtPassiveIncomes').length).fill(false)]) :
            cookies.set("boughtPassiveIncomes", boughtPassiveIncomes, {path: "/", maxAge: 604800})
            setBoughtPassiveIncomes(cookies.get('boughtPassiveIncomes'))
        cookies.get("boughtThemes") ? 
            setBoughtThemes(cookies.get('boughtThemes')) :
            cookies.set("boughtThemes", boughtThemes, {path: "/", maxAge: 604800})
            setBoughtThemes(cookies.get('boughtThemes'))
        cookies.get("boughtMusic") ? 
            setBoughtMusic(cookies.get('boughtMusic')) :
            cookies.set("boughtMusic", boughtMusic, {path: "/", maxAge: 604800})
            setBoughtMusic(cookies.get('boughtMusic'))
    }, [])
    useEffect(() => {
        cookies.set('boughtMultipliers', boughtMultipliers, {path: "/", maxAge: 604800})
        for (let i = 0; i < boughtMultipliers.length; i++) {
            if (i === 0 && boughtMultipliers[i] === false) {
                break
            } else if ((i > 0 && boughtMultipliers[i] === false) || i === boughtMultipliers.length - 1) {
                if (i === boughtMultipliers.length - 1) {
                    props.setMultiplier(MultiplierData[i].multiplier)
                    break
                }
                props.setMultiplier(MultiplierData[i - 1].multiplier)
                break
            }
        }
    }, [boughtMultipliers])
    useEffect(() => {
        cookies.set('boughtWpmBonuses', boughtWpmBonuses, {path: "/", maxAge: 604800})
        for (let i = 0; i < boughtWpmBonuses.length; i++) {
            if (i === 0 && boughtWpmBonuses[i] === false) {
                break
            } else if ((i > 0 && boughtWpmBonuses[i] === false) || i === boughtWpmBonuses.length - 1) {
                if (i === boughtWpmBonuses.length - 1) {
                    props.setWpmBonus(wpmBonusesData[i].bonus)
                    break
                }
                props.setWpmBonus(wpmBonusesData[i - 1].bonus)
                break
            }
        }
    }, [boughtWpmBonuses])
    useEffect(() => {
        cookies.set('boughtPassiveIncomes', boughtPassiveIncomes, {path: "/", maxAge: 604800})
        for (let i = 0; i < boughtPassiveIncomes.length; i++) {
            if (i === 0 && boughtPassiveIncomes[i] === false) {
                break
            } else if ((i > 0 && boughtPassiveIncomes[i] === false) || i === boughtPassiveIncomes.length - 1) {
                if (i === boughtPassiveIncomes.length - 1) {
                    props.setPassiveIncome(passiveIncomeData[i].income)
                    break
                }
                props.setPassiveIncome(passiveIncomeData[i - 1].income)
                break
            }
        }
    }, [boughtPassiveIncomes])
    useEffect(() => {
        cookies.set('boughtThemes', boughtThemes, {path: "/", maxAge: 604800})
    }, [boughtThemes])
    useEffect(() => {
        cookies.set('boughtMusic', boughtMusic, {path: "/", maxAge: 604800})
    }, [boughtMusic])

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
            boughtWpmBonuses={boughtWpmBonuses}
            setBoughtWpmBonuses={setBoughtWpmBonuses}
            wpmBonus={props.wpmBonus}
            setWpmBonus={props.setWpmBonus}
            passiveIncome={props.passiveIncome}
            setPassiveIncome={props.setPassiveIncome}
            boughtPassiveIncomes={boughtPassiveIncomes}
            setBoughtPassiveIncomes={setBoughtPassiveIncomes}
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
    } else if (currPage === 'music') {
        page = <Music
            tbucks={props.tbucks}
            setTbucks={props.setTbucks}
            musicUrl={props.musicUrl}
            setMusicUrl={props.setMusicUrl}
            boughtMusic={boughtMusic}
            setBoughtMusic={setBoughtMusic}
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
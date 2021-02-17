import ShopStyles from './Shop.module.css'

import Upgrades from './Upgrades/Upgrades'
import Themes from './Themes/Themes'
import FootNav from './FootNav/FootNav'

import Image from 'next/image'

import {MultiplierData} from '../../../utils/multiplierData'
import {useState} from 'react'

import {colors} from '../../../utils/colors'

export default function Shop(props) {
    const [currPage, setCurrPage] = useState('upgrades')
    const [boughtMultipliers, setBoughtMultipliers] = useState(new Array(MultiplierData.length).fill(false))

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
        page = <Themes tbucks={props.tbucks} setTbucks={props.setTbucks}/>
    }

    return (
        props.displayShop ? <div className={ShopStyles.div} style={colors.theme.shop.shopStyles}>
            <div className={ShopStyles.container}>
                <button className={ShopStyles.button} onClick={handleClick}>
                    <Image 
                        src="/close.png"
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
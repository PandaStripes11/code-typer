import MultiplierStyles from './Multipliers.module.css'

import {useState} from 'react'
import Image from 'next/image'

const MultiplierData = [
    {cost: 1000, multiplier: 1.5}
]

export default function Multipliers(props) {
    const [levelMultiplier, setLevelMultiplier] = useState(0)

    return (
        <div className={MultiplierStyles.div}>
            <button className={MultiplierStyles.button}>
                <span className={MultiplierStyles.title}>Multiplier</span>
                <span className={MultiplierStyles.description}>
                    <span>Level&nbsp;{levelMultiplier + 1}</span><br/>
                    <span className={MultiplierStyles.multiplier}>x{MultiplierData[levelMultiplier].multiplier}</span><br/>
                </span>
                <span className={MultiplierStyles.price}>Buy for&nbsp;
                    {MultiplierData[levelMultiplier].cost}
                    <Image 
                        src="/code-typer.png"
                        height={25}
                        width={25}
                    />
                </span>
            </button>
        </div>
    )
}
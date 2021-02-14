import MultiplierStyles from './Multipliers.module.css'

import {useState} from 'react'

const MultiplierData = [
    {cost: 1000, multiplier: 1.5}
]

export default function Multipliers(props) {
    const [levelMultiplier, setLevelMultiplier] = useState(0)

    return (
        <div className={MultiplierStyles.div}>
            <button>
                <span>Multiplier</span>
                <span>Level {levelMultiplier + 1}</span>
                <span>x{MultiplierData[levelMultiplier].multiplier}</span>
                <span>Buy for {MultiplierData[levelMultiplier].cost}</span>
            </button>
        </div>
    )
}
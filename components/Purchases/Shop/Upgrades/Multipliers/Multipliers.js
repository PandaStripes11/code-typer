import MultiplierStyles from './Multipliers.module.css'

import {useState} from 'react'

const MultiplierData = [
    {cost: 1000, multiplier: 1.5}
]

export default function Multipliers(props) {
    const [levelMultiplier, setLevelMultiplier] = useState(0)

    return (
        <div className={MultiplierStyles.div}>

        </div>
    )
}
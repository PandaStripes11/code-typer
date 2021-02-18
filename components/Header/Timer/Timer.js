import TimerStyles from './Timer.module.css'

import Image from 'next/image'

import {useState} from 'react'

import {colors} from '../../../utils/colors'

export default function Timer() {
    const [active, setActive] = useState(false)
    const [timer, setTimer] = useState(0)
    const [intervalId, setIntervalId] = useState()

    const handleClick = () => {
        if (active) {
            clearInterval(intervalId)
            setActive(false)
            return
        } else if (!active && timer) {
            setTimer(0)
        } else {
            document.getElementById('typing-input').focus()
            setActive(true)
            const currentIntervalId = setInterval(() => {
                setTimer(prev => prev + 30)
            }, 30)
            setIntervalId(currentIntervalId)
        } 
    }

    const formattedTimer = (timer / 1000).toFixed(2)

    return (
        <button className={TimerStyles.button} onClick={handleClick} style={colors.theme.header.timerStyles}>
            <Image
                src={colors.theme.images.timer}
                height={40}
                width={40}
            />
            &nbsp;{formattedTimer}
        </button>
    )
}
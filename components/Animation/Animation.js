import Image from 'next/image'
import { useState } from 'react'

import AnimationStyles from './Animation.module.css'

export default function Animation(props) {
    const [display, setDisplay] = useState(true)

    setTimeout(() => {
        if (props.setDisplayAnimation) {
            props.setDisplayAnimation(false)
        } else {
            setDisplay(false)
        }
    }, 5000)

    return (
        props.displayAnimation || (props.circumvent && display) ?
            <div className={AnimationStyles.imageContainer}>
                {props.negative || props.value < 0 ? <h6>-</h6> : null}
                <Image 
                    src="/code-typer.png"
                    height={25}
                    width={25}
                />
                <h6>{Math.abs(props.value)}&nbsp;</h6>
                {props.multiplier > 1 ?
                    <h2 className={AnimationStyles.circles} style={{backgroundColor: 'mediumseagreen', paddingRight: "12px"}}>
                        x&nbsp;{props.multiplier}
                    </h2> : null
                }
            </div> : null
    )
}
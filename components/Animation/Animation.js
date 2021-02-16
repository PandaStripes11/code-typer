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
    }, 3000)

    return (
        props.displayAnimation || (props.circumvent && display) ?
            <div className={AnimationStyles.imageContainer}>
                <Image 
                    src="/code-typer.png"
                    height={40}
                    width={40}
                />
                <h6>{props.value}&nbsp;</h6>
                {props.multiplier > 1 ?
                    <h2 className={AnimationStyles.circles} style={{backgroundColor: 'mediumseagreen', paddingRight: "18px"}}>
                        x&nbsp;{props.multiplier}
                    </h2> : null
                }
            </div> : null
    )
}
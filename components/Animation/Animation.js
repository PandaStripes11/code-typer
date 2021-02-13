import Image from 'next/image'

import AnimationStyles from './Animation.module.css'

export default function Animation(props) {
    setTimeout(() => {
        props.setDisplayAnimation(false)
    }, 2000)

    return (
        props.displayAnimation ?
            <div className={AnimationStyles.imageContainer}>
                <Image 
                    src="/code-typer.png"
                    height={75}
                    width={75}
                />
            </div> : null
    )
}
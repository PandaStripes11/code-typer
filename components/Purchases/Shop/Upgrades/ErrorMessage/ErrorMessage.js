import ErrorMessageStyles from './ErrorMessage.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function ErrorMessage(props) {
    const [display, setDisplay] = useState(true)

    const handleClick = () => {
        setDisplay(false)
    }

    return ( display ?
        <div className={ErrorMessageStyles.container} onClick={handleClick}>
            <div className={ErrorMessageStyles.card}>
                <Image 
                    src={props.src}
                    height={80}
                    width={80}
                /><br/><br/><br/>
                <h6 className={ErrorMessageStyles.h6}>{props.title}</h6>
                <p>{props.description}</p>
            </div>
        </div> : null
    )
}
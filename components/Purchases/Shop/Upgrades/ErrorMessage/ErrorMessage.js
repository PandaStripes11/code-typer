import ErrorMessageStyles from './ErrorMessage.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function ErrorMessage(props) {
    return (
        <div className={ErrorMessageStyles.container}>
            <div className={ErrorMessageStyles.card}>
                <Image 
                    src={props.src}
                    height={80}
                    width={80}
                /><br/><br/>
                <h6 className={ErrorMessageStyles.h6}>{props.title}</h6>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
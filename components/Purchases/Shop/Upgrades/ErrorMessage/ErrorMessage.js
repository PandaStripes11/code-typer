import ErrorMessageStyles from './ErrorMessage.module.css'
import Image from 'next/image'
import { useState } from 'react'

import {colors} from '../../../../../utils/colors'

export default function ErrorMessage(props) {
    return (
        <div className={ErrorMessageStyles.container} style={{background: `${colors.theme.colors.secondary}66`}}>
            <div className={ErrorMessageStyles.card} style={{background: colors.theme.colors.secondary}}>
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
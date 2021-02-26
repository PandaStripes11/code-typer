import MusicStyles from './Music.module.css'

import {colors} from '../../utils/colors'

import Image from 'next/image'
import { useState } from 'react'

export default function Music(props) {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(prev => !prev)
    }

    return (
        <>
            <iframe 
                title="music"
                src={props.musicUrl}
                width="80" 
                height="80" 
                frameBorder="0" 
                allowtransparency="true" 
                allow="encrypted-media" 
                className={MusicStyles.music}
                id="music"
                onClick={handleClick}
            >
            </iframe>
            <button 
                className={MusicStyles.icon} 
                style={{background: colors.theme.colors.primary}} 
                id="play-button"
            >
                <Image
                    src={colors.theme.images.speaker}
                    height={40}
                    width={40}
                />
            </button>
        </>
    )
}
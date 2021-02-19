import MusicStyles from './Music.module.css'

import {colors} from '../../utils/colors'

import Image from 'next/image'
import { useState } from 'react'

export default function Music() {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(prev => !prev)
    }

    return (
        <>
            <iframe 
                title="music"
                src="https://open.spotify.com/embed/playlist/0B1K8sT1KKfS4gNI9Upstm" 
                width="80" 
                height="80" 
                frameBorder="0" 
                allowtransparency="true" 
                allow="encrypted-media" 
                className={MusicStyles.music}
                autostart="true"
                autoPlay
                id="music"
                onClick={handleClick}
            >
            </iframe>
            <button 
                className={MusicStyles.icon} 
                style={{background: colors.theme.body.background}} 
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
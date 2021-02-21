import MusicIconStyles from './MusicIcon.module.css'

import Image from 'next/image'

import ErrorMessage from '../../Upgrades/ErrorMessage/ErrorMessage'
import { useState } from 'react'

export default function MusicIcon(props) {
    const [errorMessage, setErrorMessage] = useState(null)

    const handleClick = () => {
        if (props.boughtMusic[props.url]) {
            props.setSelectedMusicUrl(props.url)
        } else if (props.tbucks < props.cost) {
            setErrorMessage(
                <ErrorMessage
                    src="/code-typer.png"
                    title="You Need More T-bucks"
                    description="Type faster and you'll eventually get there"
                />
            )
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000)
            return
        } else {
            const boughtMusic = {...props.boughtMusic}
            boughtMusic[props.url] = true
            props.setBoughtMusic(boughtMusic)
            props.setTbucks(props.tbucks - props.cost)
            props.setSelectedMusicUrl(props.url)
        }
    }

    return (
        <div className={MusicIconStyles.icon}>
            <h2>{props.name}</h2>
            <ul className={MusicIconStyles.list}>
                {props.colors.map((elem, index) => {
                    if (index === 0) {
                        return <li style={{background: elem, width: `calc(100% / ${props.colors.length})`}} key={elem} className={MusicIconStyles.head}></li>
                    } else if (index === props.colors.length - 1) {
                        return <li style={{background: elem, width: `calc(100% / ${props.colors.length})`}} key={elem} className={MusicIconStyles.tail}></li>
                    }
                    return <li style={{background: elem, width: `calc(100% / ${props.colors.length})`}} key={elem}></li>
                })}
            </ul>
            <div className={MusicIconStyles.foot}>
                <p>{props.description}</p>
                <button className={MusicIconStyles.button} onClick={handleClick}>
                    {
                        props.boughtMusic[props.url] ? (
                            props.selectedMusicUrl === props.url ? "Selected" : "Select"
                        ) : props.cost
                    }
                    {
                        props.boughtMusic[props.url] ? null : (
                            <Image 
                                src="/code-typer.png"
                                height={25}
                                width={25}
                            />
                        )
                    }    
                </button>
            </div>
        </div>
    )
}
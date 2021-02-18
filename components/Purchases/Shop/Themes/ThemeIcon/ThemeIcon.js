import ThemeIconStyles from './ThemeIcon.module.css'

import Image from 'next/image'

import ErrorMessage from '../../Upgrades/ErrorMessage/ErrorMessage'

import {colors} from '../../../../../utils/colors'
import { useState } from 'react'

export default function ThemeIcon(props) {
    const [errorMessage, setErrorMessage] = useState(null)

    const handleClick = () => {
        if (props.isBought) {
            props.setSelectedTheme(props.name)
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
            const boughtThemes = {...props.boughtThemes}
            boughtThemes[props.name] = true
            props.setBoughtThemes(boughtThemes)
            props.setTbucks(props.tbucks - props.cost)
            props.setSelectedTheme(props.name)
        }
        colors['theme'] = props.allColors
    }

    return (
        <div className={ThemeIconStyles.icon}>
            <h2>{props.name}</h2>
            <ul className={ThemeIconStyles.list}>
                {props.colors.map((elem, index) => {
                    if (index === 0) {
                        return <li style={{background: elem, width: `calc(100% / ${props.colors.length})`}} key={elem} className={ThemeIconStyles.head}></li>
                    } else if (index === props.colors.length - 1) {
                        return <li style={{background: elem, width: `calc(100% / ${props.colors.length})`}} key={elem} className={ThemeIconStyles.tail}></li>
                    }
                    return <li style={{background: elem, width: `calc(100% / ${props.colors.length})`}} key={elem}></li>
                })}
            </ul>
            <div className={ThemeIconStyles.buttonContainer}>
                <button className={ThemeIconStyles.button} onClick={handleClick}>
                    {
                        props.isBought ? (
                            props.isSelected ? "Selected" : "Select"
                        ) : (
                            props.cost
                        )
                    }
                    {props.isBought ?
                        null : 
                        (
                            <Image
                                src="/code-typer.png"
                                height={25}
                                width={25}
                            />
                        )
                    }
                </button>
            </div>
            {errorMessage}
        </div>
    )
}
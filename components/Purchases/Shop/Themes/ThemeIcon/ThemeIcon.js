import ThemeIconStyles from './ThemeIcon.module.css'

import Image from 'next/image'

import {colors} from '../../../../../utils/colors'

export default function ThemeIcon(props) {
    const handleClick = () => {
        if (props.tbucks < props.cost) {
            return
        }
        props.setTbucks(props.tbucks - props.cost)
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
                    {props.cost}
                    <Image
                        src="/code-typer.png"
                        height={25}
                        width={25}
                    />
                </button>
            </div>
        </div>
    )
}
import HeaderStyles from './Header.module.css'
import Image from 'next/image'

import Timer from './Timer/Timer'

import {colors} from '../../utils/colors'

export default function Header(props) {
    return (
        <header className={HeaderStyles.header} style={colors.theme.header.headerStyles}>
            <div className={HeaderStyles.container}>
                <Image 
                    src="/code-typer.png"
                    height={50}
                    width={50}
                    alt="T-bucks"
                />
                <Timer />
            </div>
            <h2 className={HeaderStyles.h2}>
                {props.cbucks}
                <Image
                    src="/code-typer.png"
                    height={25}
                    width={25}
                    alt="T-bucks"
                />
            </h2>
        </header>
    )
}
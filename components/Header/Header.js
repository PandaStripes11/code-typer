import HeaderStyles from './Header.module.css'
import Image from 'next/image'

export default function Header(props) {
    return (
        <header className={HeaderStyles.header}>
            <Image 
                src="/code-typer.png"
                height={50}
                width={50}
                alt="T-bucks"
            />
            <h2 className={HeaderStyles.h2}>T-Bucks: {props.cbucks}</h2>
        </header>
    )
}
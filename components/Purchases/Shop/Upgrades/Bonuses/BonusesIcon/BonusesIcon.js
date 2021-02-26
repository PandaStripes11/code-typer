import BonusesIconStyles from './BonusesIcon.module.css'

import Image from 'next/image'

export default function BonusesIcon(props) {
    const handleClick = () => {
        props.setCurrPage(props.pageToDisplay)
    }

    return (
        <button className={BonusesIconStyles.icon} onClick={handleClick}>
            <h4 className={BonusesIconStyles.h4}>{props.title}</h4>
            <p className={BonusesIconStyles.p}>{props.description}</p>
            <Image 
                src={props.src}
                height={80}
                width={90}
            />
        </button>
    )
}
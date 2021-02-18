import PageIconStyles from './PageIcon.module.css'
import Image from 'next/image'

import {colors} from '../../../../../../utils/colors'

export default function PageIcon(props) {
    const handleClick = () => {
        props.setDisplayPage(props.pageToDisplay)
    }

    return (
        <button 
            className={PageIconStyles.icon} 
            onClick={handleClick} 
            style={{
                background: colors.theme.colors.secondary,
                color: colors.theme.body.textColor
            }}
        >
            <div>
                <Image 
                    src={props.src}
                    height={80}
                    width={80}
                />
            </div>
            <div>
                <h4 className={PageIconStyles.h4}>{props.name}</h4>
                <p className={PageIconStyles.p}>{props.description}</p>
            </div>
        </button>
    )
}
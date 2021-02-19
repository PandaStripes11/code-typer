import InfoIconStyles from './InfoIcon.module.css'

import {colors} from '../../../utils/colors'

export default function InfoIcon(props) {
    const handleClick = () => {
        props.setDisplayInfo(true)
    }

    return (
        <button className={InfoIconStyles.button} style={colors.theme.icons} onClick={handleClick}>
            &#9432; Info
        </button>
    )
}
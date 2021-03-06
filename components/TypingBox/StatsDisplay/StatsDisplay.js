import StatsDisplayStyles from './StatsDisplay.module.css'

import {colors} from '../../../utils/colors'

export default function StatsDisplay(props) {
    const handleClick = () => {
        props.setCustomizeDisplay(true)
    }

    return (
        <div className={StatsDisplayStyles.fullDisplay}>
            <h3>WPM: {props.wpm} / Acc: {props.acc}%</h3>
            <button 
                className={StatsDisplayStyles.button}
                onClick={handleClick}
                style={colors.theme.customize}
            >Customize</button>
        </div>
    )
}
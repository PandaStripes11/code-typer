import StatsDisplayStyles from './StatsDisplay.module.css'

export default function StatsDisplay(props) {
    return (
        <div className={StatsDisplayStyles.fullDisplay}>
            <h3>WPM: {props.wpm} / Acc: {props.acc}%</h3>
            <h3>Change</h3>
        </div>
    )
}
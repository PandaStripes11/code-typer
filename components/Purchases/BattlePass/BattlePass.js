import BattlePassStyles from './BattlePass.module.css'

export default function BattlePass(props) {
    const handleClick = () => {
        props.setDisplayBattlePass(!props.displayBattlePass)
    }

    return (
        props.displayBattlePass ? <div className={BattlePassStyles.div}>
            <h2>Coming Soon!</h2>
            <button 
                className={BattlePassStyles.button}
                onClick={handleClick}
            >Exit</button>
        </div> : null
    )
}


import MenuStyles from './Menu.module.css'

import PageIcon from './PageIcon/PageIcon'

export default function Menu(props) {
    return (
        <div className={MenuStyles.menu}>
            <PageIcon 
                pageToDisplay={"multipliers"}
                setDisplayPage={props.setDisplayPage}
                name={"Multipliers"}
                src={"/green_x.png"}
                description={"Multiply the amount of T-bucks you get each time you finish a passage"}
            />
            <PageIcon
                pageToDisplay={"bonuses"}
                setDisplayPage={props.setDisplayPage}
                name={"Bonuses"}
                src={"/bonuses.png"}
                description={"Boost your accuracy or wpm multipliers each time you finish a passage"}
            />
            <PageIcon
                pageToDisplay={"passiveIncome"}
                setDisplayPage={props.setDisplayPage}
                name={"Passive Income"}
                src={"/blue_money.png"}
                description={"Passively gain T-bucks while you're idle. Only works if you have the tab open"}
            />
        </div>
    )
}
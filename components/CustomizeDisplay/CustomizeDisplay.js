import CustomizeDisplayStyles from './CustomizeDisplay.module.css'

export default function CustomizeDisplay(props) {
    return (
        <section 
            className={
                props.display ? CustomizeDisplayStyles.sectionActive : CustomizeDisplayStyles.sectionInactive
            }
        >
            <div className={CustomizeDisplayStyles.div}>
                <h3 className={CustomizeDisplayStyles.title}>Welcome to the Customizer</h3>
            </div>
        </section>
    )
}
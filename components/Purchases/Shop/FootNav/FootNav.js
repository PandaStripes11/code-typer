import FootNavStyles from './FootNav.module.css'
import {colors} from '../../../../utils/colors'

export default function FootNav(props) {
    const handleUpgradesClick = () => {
        props.setCurrPage("upgrades")
    }
    const handleThemesClick = () => {
        props.setCurrPage("themes")
    }

    let upgradeStyles, themeStyles
    if (props.currPage === "upgrades") {
        upgradeStyles = {
            backgroundSize: "100% 2px"
        }
        themeStyles = {}
    } else if (props.currPage === "themes") {
        themeStyles = {
            backgroundSize: "100% 2px"
        }
        upgradeStyles = {}
    }

    return (
        <section 
            className={FootNavStyles.footNav} 
            style={{background: colors.theme.shop.footNavStyles.background}
        }>
            <button
                className={`${FootNavStyles.button} ${FootNavStyles.one}`} 
                onClick={handleUpgradesClick}
                style={{...upgradeStyles, color: colors.theme.shop.footNavStyles.color}}
            >⚡ Upgrades</button>
            <button 
                className={`${FootNavStyles.button} ${FootNavStyles.two}`}
                onClick={handleThemesClick}
                style={{...themeStyles, color: colors.theme.shop.footNavStyles.color}}
            >🔴 Themes</button>
        </section>
    )
}
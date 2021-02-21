import FootNavStyles from './FootNav.module.css'
import {colors} from '../../../../utils/colors'

export default function FootNav(props) {
    const handleUpgradesClick = () => {
        props.setCurrPage("upgrades")
    }
    const handleThemesClick = () => {
        props.setCurrPage("themes")
    }
    const handleMusicClick = () => {
        props.setCurrPage("music")
    }

    let upgradeStyles, themeStyles, musicStyles
    if (props.currPage === "upgrades") {
        upgradeStyles = {
            backgroundSize: "100% 2px"
        }
        themeStyles = {}
        musicStyles = {}
    } else if (props.currPage === "themes") {
        themeStyles = {
            backgroundSize: "100% 2px"
        }
        upgradeStyles = {}
        musicStyles = {}
    } else if (props.currPage === "music") {
        musicStyles = {
            backgroundSize: "100% 2px"
        }
        upgradeStyles, themeStyles = {}
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
            >
                ⚡ Upgrades
            </button>
            <button 
                className={`${FootNavStyles.button} ${FootNavStyles.two}`}
                onClick={handleThemesClick}
                style={{...themeStyles, color: colors.theme.shop.footNavStyles.color}}
            >
                🔴 Themes
            </button>
            <button
                className={`${FootNavStyles.button} ${FootNavStyles.three}`}
                onClick={handleMusicClick}
                style={{...musicStyles, color: colors.theme.shop.footNavStyles.color}}
            >
                🎵 Music
            </button>
        </section>
    )
}
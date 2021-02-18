import ThemesStyles from './Themes.module.css'

import ThemeIcon from './ThemeIcon/ThemeIcon'
import {themeColors} from '../../../../utils/themeColors'

export default function Themes(props) {
    return (
        <section className={ThemesStyles.themes}>
            <div className={ThemesStyles.container}>
                {themeColors.map((elem, index) => {
                    return (
                        <ThemeIcon
                            name={elem.name}
                            cost={elem.cost}
                            colors={elem.displayColors}
                            allColors={elem.colors}
                            tbucks={props.tbucks}
                            setTbucks={props.setTbucks}
                            key={Math.round(Math.random() * 1000)}
                            index={index}
                            boughtThemes={props.boughtThemes}
                            setBoughtThemes={props.setBoughtThemes}
                            isBought={
                                props.boughtThemes[elem.name]
                            }
                            setSelectedTheme={props.setSelectedTheme}
                            isSelected={elem.name === props.selectedTheme ? true : false}
                        />
                    )
                })}
            </div>
        </section>
    )
}
import ThemesStyles from './Themes.module.css'

import ThemeIcon from './ThemeIcon/ThemeIcon'
import {themeColors} from '../../../../utils/themeColors'

export default function Themes(props) {
    return (
        <section className={ThemesStyles.themes}>
            <div className={ThemesStyles.container}>
                {themeColors.map(elem => {
                    return (
                        <ThemeIcon
                            name={elem.name}
                            cost={elem.cost}
                            colors={elem.displayColors}
                            allColors={elem.colors}
                            tbucks={props.tbucks}
                            setTbucks={props.setTbucks}
                            key={Math.round(Math.random() * 1000)}
                        />
                    )
                })}
            </div>
        </section>
    )
}
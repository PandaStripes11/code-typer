import ThemesStyles from './Themes.module.css'

import ThemeIcon from './ThemeIcon/ThemeIcon'

export default function Themes(props) {
    return (
        <section className={ThemesStyles.themes}>
            <div className={ThemesStyles.container}>
                <ThemeIcon
                    name="Dark"
                    colors={["#333333", "#123456", "#566573", "#ABB2B9"]}
                    cost={1000}
                    tbucks={props.tbucks}
                    setTbucks={props.setTbucks}
                />
            </div>
        </section>
    )
}
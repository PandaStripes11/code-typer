import CreditStyles from './Credits.module.css'

import {colors} from '../../utils/colors'

export default function Credits() {
    return (
        <footer className={CreditStyles.footer} style={colors.theme.credits}>
            <p className={CreditStyles.p}>Made by Truong &amp; Sedge&trade;</p>
            <p className={CreditStyles.p}>Code: <a className={CreditStyles.a} target="_blank" href="https://github.com/PandaStripes11/code-typer">https://github.com/PandaStripes11/code-typer</a></p>
        </footer>
    )
}
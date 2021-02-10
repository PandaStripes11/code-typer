import CreditStyles from './Credits.module.css'

export default function Credits() {
    return (
        <footer className={CreditStyles.footer}>
            <p>Made by Truong&#169; &amp; Sedge&trade;</p>
            <p>Code: <a className={CreditStyles.a} href="https://github.com/PandaStripes11/code-typer">https://github.com/PandaStripes11/code-typer</a></p>
        </footer>
    )
}
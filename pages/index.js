import Head from 'next/head'
import TypingBox from '../components/TypingBox/TypingBox'
import Credits from '../components/Credits/Credits'

export default function App() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Improve your typing speed with this fun, fast, and efficient typing page."/>
                <title>Code Typer</title>
            </Head>
            <h1>Code Typer</h1>
            <TypingBox />
            <Credits />
        </>
    )
}
import Head from 'next/head'
import TypingBox from '../components/TypingBox/TypingBox'
import Credits from '../components/Credits/Credits'
import CustomizeDisplay from '../components/CustomizeDisplay/CustomizeDisplay'
import Header from '../components/Header/Header'
//import Purchases from '../components/Purchases/Purchases.'

import {useState} from 'react'

export default function App() {
    const [cbucks, setCbucks] = useState(0)
    const [customize, setCustomize] = useState(false)
    const [passageDetails, setPassageDetails] = useState({
        type: 'words',
        symbols: [],
        number: 50
    })

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Improve your typing speed with this fun, fast, and efficient typing page."/>
                <title>Type Master</title>
                <link rel="icon" href="./code-typer.png"/>
            </Head>
            <Header 
                cbucks={cbucks}
            />
            {/*<Purchases 
                cbucks={cbucks}
                setCbucks={setCbucks}
            />*/}
            <h1>Type Master</h1>
            <TypingBox 
                setCustomizeDisplay={setCustomize}
                passageDetails={passageDetails}
                setCbucks={setCbucks}
                cbucks={cbucks}
            />
            <CustomizeDisplay
                display={customize} 
                setCustomizeDisplay={setCustomize}
                setPassageDetails={setPassageDetails}
                passageDetails={passageDetails}
            />
            <Credits />
        </>
    )
}
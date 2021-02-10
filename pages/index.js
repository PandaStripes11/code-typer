import Head from 'next/head'
import TypingBox from '../components/TypingBox/TypingBox'
import Credits from '../components/Credits/Credits'
import CustomizeDisplay from '../components/CustomizeDisplay/CustomizeDisplay'

import {useState} from 'react'

export default function App() {
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
            </Head>
            <h1>Type Master</h1>
            <TypingBox 
                setCustomizeDisplay={setCustomize}
                passageDetails={passageDetails}
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
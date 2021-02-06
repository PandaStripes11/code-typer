import {useState} from 'react'

import Passage from './Passage/Passage.js'
import TypingInput from './TypingInput/TypingInput.js'

import TypingBoxStyles from './TypingBox.module.css'

export default function TypingBox() {
    const [text, setText] = useState('')
    const [passageText, setPassageText] = useState([])

    const handleChange = ({target}) => {
        setText(target.value)
    }

    const generateNewPassage = () => {
        
    }

    return (
        <main className={TypingBoxStyles.main}>
            <h1 className={TypingBoxStyles.h1}>Code Typer</h1>
            <Passage text={passageText}/>
            <TypingInput value={text} onChange={handleChange}/>
        </main>
    )
}
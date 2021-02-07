import {useState, useEffect} from 'react'

import Passage from './Passage/Passage.js'
import TypingInput from './TypingInput/TypingInput.js'

import TypingBoxStyles from './TypingBox.module.css'

export default function TypingBox() {
    const [text, setText] = useState('')
    const [currentWord, setCurrentWord] = useState(0)
    const [correct, setCorrect] = useState(undefined)
    const [passageText, setPassageText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')


    const handleChange = ({target}) => {
        const {value} = target
        const words = passageText.split(' ')
        const word = words[currentWord]
        if (value === word.substring(0, value.length) && value != '') {
            setCorrect(true)
        } else {
            setCorrect(false)
        }

        if (value.endsWith(' ')) {
            setText('')
            setCorrect(undefined)
            setCurrentWord(prev => prev + 1)
            return
        }
        setText(value)
    }

    return (
        <main className={TypingBoxStyles.main}>
            <h1 className={TypingBoxStyles.h1}>Code Typer</h1>
            <Passage 
                passage={passageText}
                currentWord={currentWord}
            />
            <TypingInput 
                value={text} 
                onChange={handleChange}
                correct={correct}
            />
        </main>
    )
}
import {useState, useEffect} from 'react'

import Passage from './Passage/Passage.js'
import TypingInput from './TypingInput/TypingInput.js'

import TypingBoxStyles from './TypingBox.module.css'

export default function TypingBox() {
    const [text, setText] = useState('') 
    const [currentWord, setCurrentWord] = useState(0)
    const [correct, setCorrect] = useState(undefined)
    const [passageText, setPassageText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')

    const words = passageText.split(' ')

    const [correctWords, setCorrectWords] = useState(new Array(words.length).fill(0))

    const handleChange = ({target}) => {
        const {value} = target
        setText(value)

        if (currentWord === words.length) {
            return
        }

        const word = words[currentWord]
        if (value === word.substring(0, value.length) && value != '') {
            setCorrect(true)
        } else {
            setCorrect(false)
        }

        if (value.endsWith(' ')) {
            setCurrentWord(prev => prev + 1)
            setCorrectWords((prev) => {
                const newWords = prev.map((elem, index) => {
                    if (index === currentWord) {
                        if (value === word.substring(0, value.length) + ' ') {
                            return true
                        } else {
                            return false
                        }
                    }
                    return elem
                })
                return newWords
            })
            setText('')
            setCorrect(undefined)
            return
        }
    }

    const handleClick = () => {
        setText('')
        setCurrentWord(0)
        setCorrect(undefined)
        setCorrectWords(new Array(words.length).fill(0))
    }

    return (
        <main className={TypingBoxStyles.main}>
            <Passage 
                passage={passageText}
                currentWord={currentWord}
                correctWords={correctWords}
            />
            <TypingInput 
                value={text} 
                onChange={handleChange}
                correct={correct}
                handleClick={handleClick}
            />
        </main>
    )
}
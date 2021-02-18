import {useState, useEffect} from 'react'

import StatsDisplay from './StatsDisplay/StatsDisplay.js'
import Passage from './Passage/Passage.js'
import TypingInput from './TypingInput/TypingInput.js'

import TypingBoxStyles from './TypingBox.module.css'
import {passageWords, sentences, paragraphs} from '../../utils/passages'

import {colors} from '../../utils/colors'

export default function TypingBox(props) {
    const [text, setText] = useState('') 
    const [updater, setUpdater] = useState(0)
    const [currentWord, setCurrentWord] = useState(0)
    const [correct, setCorrect] = useState(undefined)
    const [wpm, setWpm] = useState(0)
    const [acc, setAcc] = useState(0)
    const [intervalId, setIntervalId] = useState()
    const [timer, setTimer] = useState(0)
    const [placeholder, setPlaceholder] = useState('Type the words here')
    
    const [passageText, setPassageText] = useState('some word little hand people like problem house without do house move end part back do because would the more time some this high new a other change play from before because it about show around most world around one good by order eye because under way many know own')

    const words = passageText.split(' ')

    const [correctWords, setCorrectWords] = useState(new Array(words.length).fill(0))
    
    useEffect(() => {
        if (updater !== 0) {
            let correct = 0
            for (let i = 0; i < currentWord; i++) {
                if (correctWords[i] === true) {
                    correct++
                }
            }
            let rawAccuracy = correct / currentWord
            let roundedAccuracy = Math.round(rawAccuracy * 1000)

            let rawWpm = currentWord * 60  / (timer / 1000)
            let roundedWpm = Math.round(rawWpm * 10)
            setTimer(prev => prev + 100)
            if (timer === 0) {
                setAcc(0)
                setWpm(0)
                return
            } else if (currentWord === 0) {
                setAcc(0)
                return
            }
            setAcc((roundedAccuracy / 10))
            setWpm((roundedWpm / 10).toFixed(1))
        }
    }, [updater])

    useEffect(() => {
        document.getElementById('typing-input').focus()
    }, [passageText])

    function changeUpdater() {
        let intervalId = setInterval(() => {
            setUpdater(prev => {
                if (prev === 0 || prev === 1) {
                    return prev + 1
                } else {
                    return prev - 1
                }
            })
        }, 100)
        return intervalId
    }
    function generatePassage() {
        let myPassage = []
        let arrayToUse
        if (props.passageDetails.type === 'words') {
            arrayToUse = passageWords
        } else if (props.passageDetails.type === 'sentences') {
            arrayToUse = sentences
        } else if (props.passageDetails.type === 'paragraphs') {
            arrayToUse = paragraphs
        }
        for (let i = 0; i < props.passageDetails.number; i++) {
            if (props.passageDetails.symbols.length) {
                let symbol;
                let otherRandom;
                const randomIndex = Math.floor(Math.random() * props.passageDetails.symbols.length)
                const randomNumber = Math.random()
                if (randomNumber > 0.7) {
                    let symbolToUse = props.passageDetails.symbols[randomIndex]
                    otherRandom = Math.floor(Math.random() * 2)
                    symbol = symbolToUse.charAt(otherRandom)
                } else {
                    myPassage.push(
                        arrayToUse[Math.floor(Math.random() * arrayToUse.length)]
                    )
                }
                if (otherRandom === 0) {
                    myPassage.push(
                        `${symbol}${arrayToUse[Math.floor(Math.random() * arrayToUse.length)]}`
                    )
                } else if (otherRandom === 1) {
                    myPassage.push(
                        `${arrayToUse[Math.floor(Math.random() * arrayToUse.length)]}${symbol}`
                    )
                }
            } else {
                myPassage.push(
                    arrayToUse[Math.floor(Math.random() * arrayToUse.length)]
                )
            }
        }
        setPassageText(myPassage.join(' '))
    }

    const handleChange = ({target}) => {
        const {value} = target

        //Begin
        if (currentWord === 0 && text === '' && correct === undefined) {
            const currId = changeUpdater()
            setIntervalId(currId)
            setPlaceholder('')
        }

        setText(value)

        //End
        if (currentWord >= words.length) {
            clearInterval(intervalId)
            return
        } else if (currentWord === words.length - 1) {
            //Correct
            if (target.value === words[currentWord]) {
                clearInterval(intervalId)
                setCorrectWords(prev => {
                    const newWords = prev.map((elem, index) => {
                        if (index === currentWord) {
                            return true
                        } else {
                            return elem
                        }
                    })
                    return newWords
                })
                setCurrentWord(prev => prev + 1)
                setCorrect(true)
                if (acc < 25) {
                    if (props.cbucks < 100) {
                        props.setCbucks(0)
                    } else {
                        props.setCbucks(
                            props.cbucks - 100
                        )
                    }
                    props.setAnimationValue(-100)
                    props.setDisplayAnimation(true)
                    return
                }
                if (acc < 60) {
                    props.setAnimationValue(0)
                    props.setDisplayAnimation(true)
                    return
                }
                const cbucks = Math.round(Math.round(Math.round((parseFloat(wpm) * (acc / 25 + 1)) * (words.length / 25) * (props.passageDetails.symbols.length / 2 + 1)) / 15) * props.multiplier)
                props.setAnimationValue(cbucks)
                props.setDisplayAnimation(true)
                setTimeout(() => {
                    props.setCbucks(
                        props.cbucks + Math.round(Math.round(Math.round((parseFloat(wpm) * (acc / 25 + 1)) * (words.length / 25) * (props.passageDetails.symbols.length / 2 + 1)) / 15) * props.multiplier)
                    )
                }, 2000)
                
                return
            //Incorrect
            } else if (target.value.endsWith(' ') && (target.value !== words[currentWord] && target.value !== words[currentWord] + ' ')) {
                clearInterval(intervalId)
                setCorrectWords(prev => {
                    const newWords = prev.map((elem, index) => {
                        if (index === currentWord) {
                            return false
                        } else {
                            return elem
                        }
                    })
                    
                    return newWords
                })
                setCurrentWord(prev => prev + 1)
                if (acc < 25) {
                    if (props.cbucks < 100) {
                        props.setCbucks(0)
                    } else {
                        props.setCbucks(
                            props.cbucks - 100
                        )
                    }
                    props.setAnimationValue(-100)
                    props.setDisplayAnimation(true)
                    return
                }
                if (acc < 60) {
                    props.setAnimationValue(0)
                    props.setDisplayAnimation(true)
                    return
                }
                const cbucks = Math.round(Math.round(Math.round((parseFloat(wpm) * (acc / 25 + 1)) * (words.length / 25) * (props.passageDetails.symbols.length / 2 + 1)) / 15) * props.multiplier)
                props.setAnimationValue(cbucks)
                props.setDisplayAnimation(true)
                setTimeout(() => {
                    props.setCbucks(
                        props.cbucks + Math.round(Math.round(Math.round((parseFloat(wpm) * (acc / 25 + 1)) * (words.length / 25) * (props.passageDetails.symbols.length / 2 + 1)) / 15) * props.multiplier)
                    )
                }, 2000)
                setCorrect(false)
                return
            }
        }

        // Default
        const word = words[currentWord]
        if (value === word.substring(0, value.length) && value != '') {
            setCorrect(true)
        } else {
            setCorrect(false)
        }

        
        if (value.startsWith(' ') && currentWord > 2) {
            return
        }
        

        // Space
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
        clearInterval(intervalId)
        setText('')
        setCurrentWord(0)
        setCorrect(undefined)
        setCorrectWords(new Array(words.length).fill(0))
        setAcc(0)
        setWpm(0)
        setUpdater(0)
        setTimer(0)
        setPlaceholder('Type the words here')
        generatePassage()
    }

    return (
        <main className={TypingBoxStyles.main}>
            <StatsDisplay 
                wpm={wpm}
                acc={acc}
                setCustomizeDisplay={props.setCustomizeDisplay}
            />
            <div className={TypingBoxStyles.typingBox} style={colors.theme.typingBox}>
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
                    placeholder={placeholder}
                />
            </div>
        </main>
    )
}
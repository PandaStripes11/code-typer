import Passage from './Passage/Passage.js'
import TypingInput from './TypingInput/TypingInput.js'

import './TypingBox.module.css'

export default function TypingBox() {
    return (
        <main>
            <h1>Code Typer</h1>
            <Passage />
            <TypingInput />
        </main>
    )
}
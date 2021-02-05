import Passage from './Passage/Passage.js'
import TypingInput from './TypingInput/TypingInput.js'

import TypingBoxStyles from './TypingBox.module.css'

export default function TypingBox() {
    return (
        <main className={TypingBoxStyles.main}>
            <h1 className={TypingBoxStyles.h1}>Code Typer</h1>
            <Passage />
            <TypingInput />
        </main>
    )
}
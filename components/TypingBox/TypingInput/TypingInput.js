import {useEffect} from 'react'

import TypingInputStyles from './TypingInput.module.css'

export default function TypingInput(props) {
    /*
    useEffect(() => {
        document.getElementById('typing-input').addEventListener('keydown', () => {
            var x=window.scrollX;
            var y=window.scrollY;
            window.onscroll=function(){window.scrollTo(x, y);};
        }, true)

        return () => {
            document.getElementById('typing-input').removeEventListener('keydown', () => {
                var x=window.scrollX;
                var y=window.scrollY;
                window.onscroll=function(){window.scrollTo(x, y);};
            }, true)
        }
    }, [])
    */
   useEffect(() => {
       document.getElementById('typing-input').focus()
   }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        return false
    }

    return (
        <div className={TypingInputStyles.div}>
            <form className={TypingInputStyles.form} onSubmit={handleSubmit}>
                <input 
                    className={
                        props.correct ? TypingInputStyles.inputCorrect : (
                            props.correct === undefined ? TypingInputStyles.input : TypingInputStyles.inputWrong
                        )
                    }
                    type="text"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    id="typing-input"
                    id="typing-input"
                />
            </form>
            <button 
                className={TypingInputStyles.button}
                onClick={props.handleClick}
            >Redo</button>
        </div>
    )
}
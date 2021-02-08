import {useEffect} from 'react'
import TypingInputStyles from './TypingInput.module.css'

export default function TypingInput(props) {

    return (
        <div className={TypingInputStyles.div}>
            <form className={TypingInputStyles.form}>
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
                />
            </form>
            <button 
                className={TypingInputStyles.button}
                onClick={props.handleClick}
            >Redo</button>
        </div>
    )
}
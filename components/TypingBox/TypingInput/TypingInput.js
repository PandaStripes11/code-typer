import TypingInputStyles from './TypingInput.module.css'

export default function TypingInput(props) {


    return (
        <div className={TypingInputStyles.div}>
            <form className={TypingInputStyles.form}>
                <input 
                    className={TypingInputStyles.input}
                    type="text"
                    placeholder="Type the words here"
                    onChange={props.onChange}
                    value={props.value}
                />
            </form>
            <button 
                className={TypingInputStyles.button}
            >Redo</button>
        </div>
    )
}
import PassageStyles from './Passage.module.css'

export default function Passage(props) {
    const words = props.passage.split(' ')

    return (
        <div>
            <p>{words.map((element, index) => {
                if (index === props.currentWord) {
                    return <span key={element + index} className={PassageStyles.active}>{element}</span>
                } else if (index > props.currentWord) {
                    return <span key={element + index}> {element}</span>
                } else {
                    return <span key={element + index}>{element} </span>
                }
            })}</p>
        </div>
    )
}
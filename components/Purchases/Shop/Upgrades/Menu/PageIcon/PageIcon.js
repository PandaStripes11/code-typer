import PageIconStyles from './PageIcon.module.css'
import Image from 'next/image'

export default function PageIcon(props) {
    const handleClick = () => {
        props.setDisplayPage(props.pageToDisplay)
    }

    return (
        <button className={PageIconStyles.icon} onClick={handleClick}>
            <div>
                <Image 
                    src={props.src}
                    height={80}
                    width={80}
                />
            </div><br/>
            <div>
                <h4 className={PageIconStyles.h4}>{props.name}</h4>
                <p className={PageIconStyles.p}>{props.description}</p>
            </div>
        </button>
    )
}
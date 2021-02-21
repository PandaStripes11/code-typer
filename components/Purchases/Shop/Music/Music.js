import MusicStyles from './Music.module.css'

import MusicIcon from './MusicIcon/MusicIcon'

import {music} from '../../../../utils/music'

export default function Music(props) {
    return (
        <section className={MusicStyles.music}>
            <div className={MusicStyles.container}>
                {music.map(elem => {
                    return <MusicIcon
                        tbucks={props.tbucks}
                        setTbucks={props.setTbucks}
                        name={elem.name}
                        description={elem.description}
                        colors={elem.colors}
                        url={elem.url}
                        cost={elem.cost}
                        key={Math.round(Math.random() * 1000)}
                        boughtMusic={props.boughtMusic}
                        setBoughtMusic={props.setBoughtMusic}
                        selectedMusicUrl={props.musicUrl}
                        setSelectedMusicUrl={props.setMusicUrl}
                    />
                })}
            </div>
        </section>
    )
}
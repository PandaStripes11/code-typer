import MusicStyles from './Music.module.css'

export default function Music() {
    return (
        <iframe 
            title="music"
            src="https://open.spotify.com/embed/playlist/0B1K8sT1KKfS4gNI9Upstm" 
            width="80" 
            height="80" 
            frameBorder="0" 
            allowtransparency="true" 
            allow="encrypted-media" 
            className={MusicStyles.music}
            autostart="true"
            autoplay
        >
        </iframe>
    )
}
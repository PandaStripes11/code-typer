import {html} from '../../../utils/info'

import InfoPageStyles from './InfoPage.module.css'

import {colors} from '../../../utils/colors'

import Image from 'next/image'

export default function InfoPage(props) {
    const handleClick = () => {
        props.setDisplayInfo(false)
    }

    return (
        <>
            <div 
                className={InfoPageStyles.container} 
                style={{background: colors.theme.body.background}}
                dangerouslySetInnerHTML={{__html: html}}
            >   
            </div>
            <button className={InfoPageStyles.button} onClick={handleClick}>
                <Image 
                    src={colors.theme.images.close}
                    height={50}
                    width={50}
                />
            </button>
        </>
    )
}
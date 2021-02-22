import WarningStyles from './Warning.module.css'

import Image from 'next/image'

import {colors} from '../../../utils/colors'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export default function Warning(props) {
    const handleRemoveClick = () => {
        cookies.remove('tbucks')
        cookies.remove('boughtMultipliers')
        cookies.remove('boughtThemes')
        cookies.remove('boughtMusic')
        props.setDisplayWarning(null)
    }
    const handleCloseClick = () => {
        props.setDisplayWarning(null)
    }

    return (
        <div className={WarningStyles.card} style={{background: colors.theme.colors.secondary}}>
            <div className={WarningStyles.imageContainer} onClick={handleCloseClick}>
                <Image
                    src={colors.theme.images.close}
                    height={50}
                    width={50}
                />
            </div>
            <Image
                src="/cookie.png"
                width={75}
                height={75}
            />
            <h2>Remove Cookies</h2>
            <p>Removing Cookies will reset your progress and you'll lose your T-bucks the next time you come back.</p>
            <button onClick={handleRemoveClick} className={WarningStyles.button}>Remove</button>
        </div>
    )
}
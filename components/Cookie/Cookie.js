import CookieStyles from './Cookie.module.css'
import {colors} from '../../utils/colors'

import Image from 'next/image'

import {useState} from 'react'

import Warning from './Warning/Warning'

export default function Cookie() {
    const [displayWarning, setDisplayWarning] = useState(null)

    const handleIconClick = () => {
        setDisplayWarning(<Warning
            setDisplayWarning={setDisplayWarning}
        />)
    }

    return (
        <>
            <button className={CookieStyles.button} onClick={handleIconClick} style={colors.theme.icons}>
                <Image
                    src="/cookie.png"
                    height={25}
                    width={25}
                />
                &nbsp;Cookies
            </button>
            {displayWarning}
        </>
        
    )
}
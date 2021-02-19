import { useState } from 'react'

import InfoIcon from './InfoIcon/InfoIcon'
import InfoPage from './InfoPage/InfoPage'

export default function Info() {
    const [displayInfo, setDisplayInfo] = useState(false)

    return (
        <>
            <InfoIcon
                setDisplayInfo={setDisplayInfo}
            />
            {displayInfo ? <InfoPage setDisplayInfo={setDisplayInfo}/> : null}
        </>
    )
}
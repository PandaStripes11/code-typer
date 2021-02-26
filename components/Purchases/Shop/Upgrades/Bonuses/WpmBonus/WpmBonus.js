import WpmBonusStyles from './WpmBonus.module.css'

import {wpmBonusesData} from '../../../../../../utils/wpmBonusesData.js'

import ErrorMessage from '../../ErrorMessage/ErrorMessage'

import {useState} from 'react'
import Image from 'next/image'

export default function WpmBonuses(props) {
    const [levelWpmBonus, setLevelWpmBonus] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [updater, setUpdater] = useState(0)

    const handleButtonClick = () => {
        if (props.boughtWpmBonuses[levelWpmBonus]) {
            return
        } else if (props.tbucks < wpmBonusesData[levelWpmBonus].cost) {
            setErrorMessage(<ErrorMessage 
                src="/code-typer.png"
                title="You need more T-bucks"
                description="Keep your hands on homerow and keep typing."
            />)
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000)
            return
        } else {
            props.setBoughtWpmBonuses(prev => {
                const copyOfBoughtWpmBonuses = props.boughtWpmBonuses
                return copyOfBoughtWpmBonuses.map((elem, index) => {
                    if (index <= levelWpmBonus) {
                        return true
                    } else {
                        return elem
                    }
                })
            })
            props.setTbucks(prev => {
                return prev - wpmBonusesData[levelWpmBonus].cost
            })
            props.setWpmBonus(wpmBonusesData[levelWpmBonus].bonus)
            setTimeout(() => {
                setUpdater(prev => prev + 1)
            }, 200)
        }
    }
    const handleListClick = (e) => {
        const index = parseInt(e.target.innerHTML) - 1
        setLevelWpmBonus(index)
    }

    const handleLeftArrowClick = () => {
        if (levelWpmBonus === 0) {
            setLevelWpmBonus(wpmBonusesData.length - 1)
        } else {
            setLevelWpmBonus(prev => prev - 1)
        }
    }
    const handleRightArrowClick = () => {
        if (levelWpmBonus === wpmBonusesData.length - 1) {
            setLevelWpmBonus(0)
        } else {
            setLevelWpmBonus(prev => prev + 1)
        }
    }
    console.log("called")
    return (
        <div className={WpmBonusStyles.div}>
            <button 
                className={WpmBonusStyles.button} 
                onClick={handleButtonClick}
            >
                <span className={WpmBonusStyles.title}>Wpm Bonuses</span>
                <span className={WpmBonusStyles.description}>
                    <span>Level&nbsp;{levelWpmBonus + 1}</span><br/>
                    <span className={WpmBonusStyles.bonus}>+{wpmBonusesData[levelWpmBonus].bonus}</span><br/>
                </span>
                <span 
                    className={WpmBonusStyles.price}
                    style={props.boughtWpmBonuses[levelWpmBonus] ?
                        {backgroundColor: 'gray', opacity: 0.5} : {}
                    }
                >Buy for&nbsp;
                    {wpmBonusesData[levelWpmBonus].cost}
                    <Image 
                        src="/code-typer.png"
                        height={25}
                        width={25}
                    />
                </span>
            </button>
            <ul className={WpmBonusStyles.list}>
                <li className={WpmBonusStyles.arrows} onClick={handleLeftArrowClick} key="left-arrow">◀</li>
                {wpmBonusesData.map((elem, index) => {
                    if (index === levelWpmBonus) {
                        if (props.boughtWpmBonuses[index]) {
                            return (
                                <li 
                                    className={`${WpmBonusStyles.green} ${WpmBonusStyles.active}`} 
                                    onClick={handleListClick}
                                    key={elem.bonus}
                                >
                                    {index + 1}
                                </li>
                            )
                        } else {
                            return (
                                <li 
                                    className={`${WpmBonusStyles.red} ${WpmBonusStyles.active}`} 
                                    onClick={handleListClick}
                                    key={elem.bonus}
                                >
                                    {index + 1}
                                </li>
                            )
                        }
                    }
                    if (props.boughtWpmBonuses[index]) {
                        return <li className={WpmBonusStyles.green} onClick={handleListClick} key={elem.WpmBonuses}>{index + 1}</li>
                    } else {
                        return <li className={WpmBonusStyles.red} onClick={handleListClick} key={elem.WpmBonuses}>{index + 1}</li>
                    }
                })}
                <li className={WpmBonusStyles.arrows} onClick={handleRightArrowClick} key="right-arrow">▶</li>
            </ul>
            {errorMessage}
        </div>
    )
}
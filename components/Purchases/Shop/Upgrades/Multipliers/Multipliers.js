import MultiplierStyles from './Multipliers.module.css'

import {MultiplierData} from '../../../../../utils/multiplierData'

import ErrorMessage from '../ErrorMessage/ErrorMessage'

import {useState} from 'react'
import Image from 'next/image'

export default function Multipliers(props) {
    const [levelMultiplier, setLevelMultiplier] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleButtonClick = () => {
        console.log(props.tbucks, MultiplierData[levelMultiplier].cost)
        if (props.boughtMultipliers[levelMultiplier]) {
            return
        } else if (props.tbucks < MultiplierData[levelMultiplier].cost) {
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
            props.setBoughtMultipliers(() => {
                return props.boughtMultipliers.map((elem, index) => {
                    if (index <= levelMultiplier) {
                        return true
                    } else {
                        return elem
                    }
                })
            })
            props.setTbucks(prev => {
                return prev - MultiplierData[levelMultiplier].cost
            })
            props.setMultiplier(MultiplierData[levelMultiplier].multiplier)
        }
    }
    const handleListClick = (e) => {
        const index = parseInt(e.target.innerHTML) - 1
        setLevelMultiplier(index)
    }

    const handleLeftArrowClick = () => {
        if (levelMultiplier === 0) {
            setLevelMultiplier(MultiplierData.length - 1)
        } else {
            setLevelMultiplier(prev => prev - 1)
        }
    }
    const handleRightArrowClick = () => {
        if (levelMultiplier === MultiplierData.length - 1) {
            setLevelMultiplier(0)
        } else {
            setLevelMultiplier(prev => prev + 1)
        }
    }

    return (
        <div className={MultiplierStyles.div}>
            <button 
                className={MultiplierStyles.button} 
                onClick={handleButtonClick}
            >
                <span className={MultiplierStyles.title}>Multiplier</span>
                <span className={MultiplierStyles.description}>
                    <span>Level&nbsp;{levelMultiplier + 1}</span><br/>
                    <span className={MultiplierStyles.multiplier}>x{MultiplierData[levelMultiplier].multiplier}</span><br/>
                </span>
                <span 
                    className={MultiplierStyles.price}
                    style={props.boughtMultipliers[levelMultiplier] ?
                        {backgroundColor: 'gray', opacity: 0.5} : {}
                    }
                >Buy for&nbsp;
                    {MultiplierData[levelMultiplier].cost}
                    <Image 
                        src="/code-typer.png"
                        height={25}
                        width={25}
                    />
                </span>
            </button>
            <ul className={MultiplierStyles.list}>
                <li className={MultiplierStyles.arrows} onClick={handleLeftArrowClick}>◀</li>
                {MultiplierData.map((elem, index) => {
                    if (index === levelMultiplier) {
                        if (props.boughtMultipliers[index]) {
                            return (
                                <li 
                                    className={`${MultiplierStyles.green} ${MultiplierStyles.active}`} 
                                    onClick={handleListClick}
                                    key={elem.multiplier}
                                >
                                    {index + 1}
                                </li>
                            )
                        } else {
                            return (
                                <li 
                                    className={`${MultiplierStyles.red} ${MultiplierStyles.active}`} 
                                    onClick={handleListClick}
                                    key={elem.multiplier}
                                >
                                    {index + 1}
                                </li>
                            )
                        }
                    }
                    if (props.boughtMultipliers[index]) {
                        return <li className={MultiplierStyles.green} onClick={handleListClick}>{index + 1}</li>
                    } else {
                        return <li className={MultiplierStyles.red} onClick={handleListClick}>{index + 1}</li>
                    }
                })}
                <li className={MultiplierStyles.arrows} onClick={handleRightArrowClick}>▶</li>
            </ul>
            {errorMessage}
        </div>
    )
}
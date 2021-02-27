import PassiveIncomeStyles from './PassiveIncome.module.css'

import {passiveIncomeData} from '../../../../../utils/passiveIncomeData'

import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Animation from '../../../../Animation/Animation'

import {useState} from 'react'
import Image from 'next/image'

export default function PassiveIncome(props) {
    const [levelPassiveIncome, setLevelPassiveIncome] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleButtonClick = () => {
        if (props.boughtPassiveIncomes[levelPassiveIncome]) {
            return
        } else if (props.tbucks < passiveIncomeData[levelPassiveIncome].cost) {
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
            props.setBoughtPassiveIncomes(() => {
                return props.boughtPassiveIncomes.map((elem, index) => {
                    if (index <= levelPassiveIncome) {
                        return true
                    } else {
                        return elem
                    }
                })
            })
            props.setTbucks(prev => {
                return prev - passiveIncomeData[levelPassiveIncome].cost
            })
            props.setPassiveIncome(passiveIncomeData[levelPassiveIncome].income)
        }
    }
    const handleListClick = (e) => {
        const index = parseInt(e.target.innerHTML) - 1
        setLevelPassiveIncome(index)
    }

    const handleLeftArrowClick = () => {
        if (levelPassiveIncome === 0) {
            setLevelPassiveIncome(passiveIncomeData.length - 1)
        } else {
            setLevelPassiveIncome(prev => prev - 1)
        }
    }
    const handleRightArrowClick = () => {
        if (levelPassiveIncome === passiveIncomeData.length - 1) {
            setLevelPassiveIncome(0)
        } else {
            setLevelPassiveIncome(prev => prev + 1)
        }
    }

    return (
        <div className={PassiveIncomeStyles.div}>
            <button 
                className={PassiveIncomeStyles.button} 
                onClick={handleButtonClick}
            >
                <span className={PassiveIncomeStyles.title}>Multiplier</span>
                <span className={PassiveIncomeStyles.description}>
                    <span>Level&nbsp;{levelPassiveIncome + 1}</span><br/>
                    <span className={PassiveIncomeStyles.income}>{passiveIncomeData[levelPassiveIncome].income}/5s</span><br/>
                </span>
                <span 
                    className={PassiveIncomeStyles.price}
                    style={props.boughtPassiveIncomes[levelPassiveIncome] ?
                        {backgroundColor: 'gray', opacity: 0.5} : {}
                    }
                >Buy for&nbsp;
                    {passiveIncomeData[levelPassiveIncome].cost}
                    <Image 
                        src="/code-typer.png"
                        height={25}
                        width={25}
                    />
                </span>
            </button>
            <ul className={PassiveIncomeStyles.list}>
                <li className={PassiveIncomeStyles.arrows} onClick={handleLeftArrowClick} key="left-arrow">◀</li>
                {passiveIncomeData.map((elem, index) => {
                    if (index === levelPassiveIncome) {
                        if (props.boughtPassiveIncomes[index]) {
                            return (
                                <li 
                                    className={`${PassiveIncomeStyles.green} ${PassiveIncomeStyles.active}`} 
                                    onClick={handleListClick}
                                    key={elem.income + Math.floor(Math.random() * 1000)}
                                >
                                    {index + 1}
                                </li>
                            )
                        } else {
                            return (
                                <li 
                                    className={`${PassiveIncomeStyles.red} ${PassiveIncomeStyles.active}`} 
                                    onClick={handleListClick}
                                    key={elem.income + Math.floor(Math.random() * 1000)}
                                >
                                    {index + 1}
                                </li>
                            )
                        }
                    }
                    if (props.boughtPassiveIncomes[index]) {
                        return <li className={PassiveIncomeStyles.green} onClick={handleListClick} key={elem.income + Math.floor(Math.random() * 1000)}>{index + 1}</li>
                    } else {
                        return <li className={PassiveIncomeStyles.red} onClick={handleListClick} key={elem.income + Math.floor(Math.random() * 1000)}>{index + 1}</li>
                    }
                })}
                <li className={PassiveIncomeStyles.arrows} onClick={handleRightArrowClick} key="right-arrow">▶</li>
            </ul>
            {errorMessage}
        </div>
    )
}
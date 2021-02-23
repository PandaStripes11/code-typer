import CustomizeDisplayStyles from './CustomizeDisplay.module.css'

import {colors} from '../../utils/colors'

export default function CustomizeDisplay(props) {
    const handleChange = ({target}) => {
        const name = target.getAttribute("name")
        props.setPassageDetails(prev => {
            if (name === "type") {
                return {
                    ...prev,
                    type: target.value
                }
            } else if (name === "number") {
                return {
                    ...prev,
                    number: target.value
                }
            } else {
                for (let i = 0; i < prev.symbols.length; i++) {
                    if (target.value === prev.symbols[i] && target.checked === true) {
                        return
                    } else if (target.value === prev.symbols[i] && target.checked === false) {
                        const symbolsCopy = prev.symbols
                        const indexOfSymbol = symbolsCopy.indexOf(target.value)
                        symbolsCopy.splice(indexOfSymbol, 1)
                        return {
                            ...prev,
                            symbols: symbolsCopy
                        }
                    }
                }
                const newSymbols = [...prev.symbols, target.value]
                return {
                    ...prev,
                    symbols: newSymbols
                }
            }
        })
    }

    const handleSubmit = (e) => {
        props.setCustomizeDisplay(false)
        e.preventDefault()
    }

    let maxValue = 1000
    let minValue = 1
    if (props.passageDetails.type === 'paragraphs') {
        maxValue = 100
    } else if (props.passageDetails.type === 'words') {
        minValue = 10
    }

    return (
        <section 
            className={
                props.display ? CustomizeDisplayStyles.sectionActive : CustomizeDisplayStyles.sectionInactive
            }
            style={
                {backgroundColor: colors.theme.colors.secondary + "66"}
            }
        >
            <div 
                className={CustomizeDisplayStyles.div} 
                style={colors.theme.customizeDisplay}
            >
                <h3 className={CustomizeDisplayStyles.title}>Welcome to the Customizer</h3><br/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="type">Type</label><br />
                    <select name="type" id="type" onChange={handleChange} value={props.passageDetails.type}>
                        <option value="words">Words</option>
                        <option value="sentences">Sentences</option>
                        <option value="paragraphs">Paragraphs</option>
                    </select><br /><br />
                    <label htmlFor="number">Number of {props.passageDetails.type}</label><br/>
                    <input id="number" type="number" min={minValue} max={maxValue} name="number" value={props.passageDetails.number} onChange={handleChange}/><br /><br />
                    <h4>Symbols</h4>
                    <input type="checkbox" id="quotes" name="quotes" value='""' onChange={handleChange}/>
                    <label htmlFor="quotes"> Quotes ""</label><br/>
                    <input type="checkbox" id="parentheses" name="parentheses" value="()" onChange={handleChange}/>
                    <label htmlFor="parentheses"> Parentheses ()</label><br/>
                    <input type="checkbox" id="brackets" name="brackets" value="[]" onChange={handleChange}/>
                    <label htmlFor="brackets"> Brackets []</label><br/>
                    <input type="checkbox" id="braces" name="braces" value="{}" onChange={handleChange}/>
                    <label htmlFor="braces"> Squiggly Braces {"{}"}</label><br/><br/>
                    <div className={CustomizeDisplayStyles.submitContainer}>
                        <input type="submit" className={CustomizeDisplayStyles.submit}/>
                    </div>
                </form>
            </div>
        </section>
    )
}
import React, { useState, ChangeEvent } from 'react';
import { useSearchCities } from '../../city/SearchCity';

import './CitySelection.css'

/**
 *
 * @param props {
 *   onKeywordChanged : (string) => void
 * }
 */
export function InputKeyword(props: any) {
    const { onKeywordChanged } = props
    const [keyword, setKeyword] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value)
        if (onKeywordChanged) {
            onKeywordChanged(event.target.value)
        }
    }

    return (
        <div className="City-text-container">
            Search City
            <input
                className="City-textbox"
                type="text"
                onChange={onChange}
                value={keyword}></input>
        </div>
    )
}


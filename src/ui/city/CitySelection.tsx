import React, { useState, ChangeEvent } from 'react';
import './CitySelection.css';
import { InputKeyword } from './InputKeyword';
import { CityList } from './CityList';

/**
 *
 * @param props {
 *   selectedCity: City?
 *   onCitySelected: (City) => void
 * }
 */
export function CitySelection(props: any) {
    const {
        selectedCity,
        onCitySelected
    } = props
    const [keyword, setKeyword] = useState("")
    const onKeywordChanged = (str: string) => {
        setKeyword(str)
    }
    return (
        <div className="City-root">
            <InputKeyword
                onKeywordChanged={onKeywordChanged}/>
            <div className="City-underline"/>
            <CityList
                selectedCity={selectedCity}
                keyword={keyword}
                onCitySelected={onCitySelected}/>
        </div>
    )
}

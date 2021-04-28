import React from 'react'
import { CurrencyItem } from './'

const CurrenciesList = ({ data, updateFavs }) => {

    const items = data.rates;

    return (
        <div className='CurrenciesList'>
        { data.hasOwnProperty('date') ? items.map((item) => 
        <CurrencyItem 
        key={item.code}
        title={item.currency}
        code={item.code}
        value={item.mid}
        updateFavs={updateFavs}
        />) : '' }
        </div>
    )
}

export default CurrenciesList;

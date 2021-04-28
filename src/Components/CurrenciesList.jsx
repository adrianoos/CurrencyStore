import React from 'react'
import { CurrencyItem } from './'

const CurrenciesList = ({ data }) => {

    const items = data.rates;

    return (
        <div className='CurrenciesList'>
        { data.hasOwnProperty('date') ? items.map((item) => 
        <CurrencyItem 
        key={item.code}
        title={item.currency}
        code={item.code}
        value={item.mid}
        />) : '' }
        </div>
    )
}

export default CurrenciesList

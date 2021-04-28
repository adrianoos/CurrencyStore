import React from 'react'
import Flag from 'react-world-flags'

const CurrencyItem = ({ title, code, value, updateFavs }) => {

    const flagCode = code.slice(0,2)

    return (
        <div className='CurrencyItem'>
            <Flag code={ flagCode } height='40'/>
            <h3>{title}</h3>
            <p>currency code: <strong>{code}</strong></p>
            <p>exchange rate: <strong>{value}</strong></p>
            <button className='CurrItemButton' onClick={() => updateFavs(code)}>Favorites</button>
        </div>
    )
}

export default CurrencyItem;

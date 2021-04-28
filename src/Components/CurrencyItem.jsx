import React from 'react'

const CurrencyItem = ({ title, code, value }) => {

    return (
        <div className='CurrencyItem'>
            <h2>{title}</h2>
            <p>currency code: {code}</p>
            <p>exchange rate: <strong>{value}</strong></p>
        </div>
    )
}

export default CurrencyItem

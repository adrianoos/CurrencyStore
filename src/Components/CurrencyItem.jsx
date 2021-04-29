import React from 'react'
import Flag from 'react-world-flags'
import { GrFavorite } from 'react-icons/gr'; // empty icon
import { MdFavorite } from 'react-icons/md'; // fullfiled icon

const CurrencyItem = ({ title, code, value, updateFavs, favorites }) => {

    const flagCode = code.slice(0,2)
    const isInFavs = favorites.some(item => item.code === code)
    
    return (
        <div className='CurrencyItem'>
            <Flag className='flag' code={ flagCode } height='40'/>
            <h3>{title}</h3>
            <p>currency code: <strong>{code}</strong></p>
            <p>exchange rate: <strong>{value}</strong></p>
            { !isInFavs ? <button onClick={() => updateFavs(code)}><GrFavorite/></button> :
                     <button onClick={() => updateFavs(code)}><MdFavorite/></button>
            } 
        </div>
    )
}

export default CurrencyItem;

import React from 'react'
import Flag from 'react-world-flags'
import { GrFavorite } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';

const CurrencyItem = ({ title, code, value, updateFavs, favorites }) => {

    const flagCode = code.slice(0,2)
    const isInFavs = favorites.some(item => item.code === code)
    
    return (
        <div className='CurrencyItem'>
            <Flag className='flag' code={ flagCode } height='40'/>
            <h3>{title}</h3>
            <p>currency code: <strong>{code}</strong></p>
            <p>average rate: <strong>{value}</strong></p>
            { !isInFavs ? <button className='favsBtn' onClick={() => updateFavs(code)}><GrFavorite size={32}/></button> :
                     <button className='favsBtn' onClick={() => updateFavs(code)}><MdFavorite size={32}/></button>
            } 
        </div>
    )
}

export default CurrencyItem;

import React from 'react'
import Flag from 'react-world-flags'
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

const CurrencyItem = ({ title, code, value, updateFavs, favorites }) => {

    const flagCode = code.slice(0,2)
    const isInFavs = favorites.some(item => item.code === code)

    
    return (
        <div className='CurrencyItem'>
            <Flag className='flag' code={ flagCode } height='40'/>
            <h3>{title}</h3>
            <p>currency code: <strong>{code}</strong></p>
            <p>average rate: <strong>{value}</strong></p>
            { !isInFavs ? <button className='favsBtn' onClick={() => updateFavs(code)}><AiOutlineStar className='icon' size={32}/></button> :
                          <button className='favsBtn' onClick={() => updateFavs(code)}><AiFillStar className='icon' size={32}/></button>
            } 
        </div>
    )
}

export default CurrencyItem;

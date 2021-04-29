import React from 'react'
import { CurrencyItem } from './'

const CurrenciesList = ({ data, favorites, updateFavs, favsDisplay }) => {

    const emptyMsg = () => {
        return <h1>No items added</h1>
    }

    const allData = data.hasOwnProperty('date') ? data.rates.map((item) => 
    <CurrencyItem 
    key={item.code}
    title={item.currency}
    code={item.code}
    value={item.mid}
    updateFavs={updateFavs}
    fav={item.favs}
    favorites={favorites}
    />) : '' 

    const favsData = favorites.length ? favorites.map((item) => 
    <CurrencyItem 
    key={item.code}
    title={item.currency}
    code={item.code}
    value={item.mid}
    updateFavs={updateFavs}
    fav={item.favs}
    favorites={favorites}
    />) : emptyMsg()

    return (
        <div className='CurrenciesList'>
        {favsDisplay ? favsData : allData }
        </div>
    )
};

export default CurrenciesList;

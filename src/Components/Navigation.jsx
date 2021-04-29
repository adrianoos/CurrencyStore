import React from 'react'

const Navigation = ({ tableType, changeTable, switchFavsDisplay, favsDisplay, clearFavorites }) => {


    return (
        <div className='Navigation'>
            { !favsDisplay ? <button className='NavButtons' onClick={() => switchFavsDisplay()}>Favorites</button>:
             <button className='NavButtonsFilled' onClick={() => switchFavsDisplay()}>Favorites</button>
            }
            
            <button className='NavButtons' onClick={() => clearFavorites()}>Delete All</button>

            { tableType === 'A' ? <button className='NavButtons' onClick={() => changeTable()}>Table: <strong>A</strong></button> :
            <button className='NavButtons' onClick={() => changeTable()}>Table: <strong>B</strong></button>
            }
            
        </div>
    )
}

export default Navigation;

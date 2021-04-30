import React from 'react'
import { setFavs } from '../Actions'
import { useDispatch, useSelector } from 'react-redux'

const Navigation = ({ tableType, changeTable, clearFavorites }) => {
 const dispatch = useDispatch()
 const favsDisplay = useSelector(state => state.favsDisplay)

    return (
        <div className='Navigation'>
            { !favsDisplay ? <button className='NavButtons' onClick={() => dispatch(setFavs())}>Favorites</button>:
             <button className='NavButtonsFilled' onClick={() => dispatch(setFavs())}>Favorites</button>
            }
            
            <button className='NavButtons' onClick={() => clearFavorites()}>Delete All</button>

            { tableType === 'A' ? <button className='NavButtons' onClick={() => changeTable()}>Table: <strong>A</strong></button> :
            <button className='NavButtons' onClick={() => changeTable()}>Table: <strong>B</strong></button>
            }
            
        </div>
    )
}

export default Navigation;

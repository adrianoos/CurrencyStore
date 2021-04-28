import React from 'react'

const Navigation = ({ tableType, changeTable }) => {


    return (
        <div className='Navigation'>
            <button className='NavButtons'>Favorites</button>
            <button className='NavButtons'>Delete All</button>
            { tableType === 'A' ? <button className='NavButtons' onClick={() => changeTable()}>Table A</button> :
            <button className='NavButtons' onClick={() => changeTable()}>Table B</button>
            }
            
        </div>
    )
}

export default Navigation

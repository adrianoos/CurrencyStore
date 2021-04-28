import React from 'react'

const Header = ({ data }) => {

    const day = data.date

    return (
        <div className="Header">
            <h1>Currency Store</h1>
            <h3>currencies exchange rates for: {day}</h3>
            <h4>data is fetched from api.nbp.pl</h4>
        </div>
    )
}

export default Header

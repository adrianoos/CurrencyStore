import React from 'react'
import axios from 'axios';



const Api = () => {

const table = 'C'
const code = 'EUR'

  const getTable = async () => {
    try {
     // const response = await axios.get(`http://api.nbp.pl/api/exchangerates/tables/${table}`)
      const response = await axios.get(`http://api.nbp.pl/api/exchangerates/rates/${table}/${code}`)
      //http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/
     // const data = response.JSON()
      console.log(response)
    } catch (error) {
      
    }
  }
getTable()
    return (
        <div>
            
        </div>
    )
}

export default Api

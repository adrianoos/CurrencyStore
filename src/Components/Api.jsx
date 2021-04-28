import axios from 'axios';

const fetchData = async (table, currency) => {
    
    try {
      
      const getTable = await axios.get(`http://api.nbp.pl/api/exchangerates/tables/${table}`)
   //const getCurrency = await axios.get(`http://api.nbp.pl/api/exchangerates/rates/${table}/${currency}`)

      const mofifiedResponse = {
        date: getTable.data[0].effectiveDate,
        data: getTable.data[0].rates
        
      }
    return mofifiedResponse;
    } catch (error) {
      console.log(error)
    } 
};

export default fetchData;

import axios from 'axios';

const fetchData = async (table ) => {
    
    try {
      const getTable = await axios.get(`http://api.nbp.pl/api/exchangerates/tables/${table}`)
      const currenciesArray = getTable.data[0].rates
     
      const mofifiedResponse = {
        date: getTable.data[0].effectiveDate,
        rates: currenciesArray,
      }
    return mofifiedResponse;
    } catch (error) {
      console.log(error)
    } 
};

export default fetchData;

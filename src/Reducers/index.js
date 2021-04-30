import { combineReducers } from 'redux'
import fetchedData from './fetchData'
import favsDisplay from './favsDisplay'
import tableType from './tableType'

const allReducers = combineReducers({
    fetchedData: fetchedData,
    favsDisplay: favsDisplay,
    tableType: tableType
   })

   export default allReducers;
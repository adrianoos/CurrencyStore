import fetchedData from './fetchData'
import favsDisplay from './favsDisplay'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    fetchedData: fetchedData,
    favsDisplay: favsDisplay
   })

   export default allReducers;
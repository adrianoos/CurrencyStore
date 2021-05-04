import { combineReducers } from 'redux'
import favsDisplay from './favsDisplay'
import tableType from './tableType'

const allReducers = combineReducers({
    favsDisplay: favsDisplay,
    tableType: tableType
   })

   export default allReducers;
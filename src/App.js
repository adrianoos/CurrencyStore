import {useState, useEffect } from 'react'
import './App.css';
import { fetchData, Header, Navigation, CurrenciesList } from './Components';


const App = () => {

const [ data, setData ] = useState({})
const [ tableType, setTableType ] = useState('A')

const getData = async () =>{
const response = await fetchData(tableType)
setData(response)
}

console.log(data)

useEffect(() => {
  getData()
 }, [tableType])

 const changeTable = () => {
   if (tableType === 'A') {
     setTableType('B')
   } else if (tableType === 'B') {
     setTableType('A')
   }
 }



  return (
    <div className="App">
      <Header data={data}/>
      <Navigation
      changeTable={changeTable}
      tableType={tableType}
      />
      <CurrenciesList data={data}/>
    </div>
  );
}

export default App;

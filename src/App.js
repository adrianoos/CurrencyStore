import {useState, useEffect } from 'react'
import './App.css';
import { fetchData, Header, Navigation, CurrenciesList } from './Components';



const App = () => {

const [ data, setData ] = useState({})

const tableType = 'A' // temporary value

const getData = async () =>{
const response = await fetchData(tableType)
setData(response)
}

useEffect(() => {
  getData()
 },[])


  return (
    <div className="App">
      <Header data={data}/>
      <Navigation />
      <CurrenciesList data={data}/>
    </div>
  );
}

export default App;

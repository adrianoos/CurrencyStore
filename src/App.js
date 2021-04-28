import {useState, useEffect } from 'react'
import './App.css';
import { fetchData, Header, Navigation, CurrenciesList } from './Components';

// data to obiekt 
// data.rates to tablica

const App = () => {

const [ data, setData ] = useState({})
const [ favorites, setFavorites ] = useState({})
const [ tableType, setTableType ] = useState('A')

const getData = async () =>{
const response = await fetchData(tableType)
setData(response)
};

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

const updateFavs = (code) => {
  const clickedIndex = data.rates.findIndex((item) => (item.code === code))
  let tempArray = [...data.rates]
  tempArray[clickedIndex] = {...tempArray[clickedIndex], favs: !tempArray[clickedIndex].favs }
}

  return (
    <div className="App">
      <Header data={data}/>
      <Navigation
      changeTable={changeTable}
      tableType={tableType}
      />
      <CurrenciesList 
      data={data}
      updateFavs={updateFavs}
      />
    </div>
  );
}

export default App;

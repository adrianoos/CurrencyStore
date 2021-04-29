import {useState, useEffect } from 'react'
import './App.css';
import { fetchData, Header, Navigation, CurrenciesList } from './Components';

const App = () => {

const [ data, setData ] = useState({})
const [ favorites, setFavorites ] = useState([])
const [ tableType, setTableType ] = useState('A')
const [ favsDisplay, setFavsDisplay ] = useState(false)

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
 let clickedItem = data.rates[clickedIndex]

  switch(true) {
    case !favorites.includes(clickedItem):
    setFavorites(favorites.concat(clickedItem))
    break;

    case favorites.includes(clickedItem): // 
    setFavorites(favorites.filter(item => item.code !== clickedItem.code))
    break;
  }
};

const switchFavsDisplay = () =>{
  setFavsDisplay(!favsDisplay)
};


  return (
    <div className="App">
      <Header data={data}/>
      <Navigation
      changeTable={changeTable}
      tableType={tableType}
      switchFavsDisplay={switchFavsDisplay}
      favsDisplay={favsDisplay}
      />
      <CurrenciesList 
      data={data}
      updateFavs={updateFavs}
      favorites={favorites}
      favsDisplay={favsDisplay}
      />
    </div>
  );
}

export default App;

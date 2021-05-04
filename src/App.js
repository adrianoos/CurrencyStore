import {useState, useEffect } from 'react'
import { onConfirm } from 'react-confirm-pro';
import { fetchData, Header, Navigation, CurrenciesList } from './Components';
import { useSelector } from 'react-redux'
import './App.css';

const App = () => {

const tableType = useSelector(state => state.tableType)
const [ data, setData ] = useState({})
const [ favorites, setFavorites ] = useState([])

const getData = async () =>{
const response = await fetchData(tableType)
setData(response)
};

useEffect(() => {
  getData()
 }, [tableType])

const updateFavs = (code) => {
 
 const clickedIndex = data.rates.findIndex((item) => (item.code === code))
 let clickedItem = data.rates[clickedIndex]

  switch(true) {
  
    case favorites.includes(clickedItem):
      onConfirm({
        title: ( <h3>Remove this currency from favorites ?</h3>),
        onSubmit: () => {
        setFavorites(favorites.filter(item => item.code !== clickedItem.code))
        },
        onCancel: () => {
        },
      })
    break;
    
    default:
    setFavorites(favorites.concat(clickedItem))
    break;

  }
};

const clearFavorites = () => {
  onConfirm({
    title: ( <h3>Remove all favorites Items ?</h3>),
    description: (<p>This process cannot be undone.</p>),
    onSubmit: () => {
    setFavorites([])
    },
    onCancel: () => {
    },
  })
};


  return (
    <div className="App">
      <Header data={data}/>
      <Navigation
      tableType={tableType}
      clearFavorites={clearFavorites}
      />
      <CurrenciesList 
      data={data}
      updateFavs={updateFavs}
      favorites={favorites}
      />
    </div>
  );
}

export default App;

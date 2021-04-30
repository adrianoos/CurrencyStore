import {useState, useEffect } from 'react'
import { onConfirm } from 'react-confirm-pro';
import { fetchData, Header, Navigation, CurrenciesList } from './Components';
import { useSelector } from 'react-redux'
import './App.css';

const App = () => {
const [ data, setData ] = useState({})
const [ favorites, setFavorites ] = useState([])
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
 let clickedItem = data.rates[clickedIndex]

  switch(true) {
    case !favorites.includes(clickedItem):
    setFavorites(favorites.concat(clickedItem))
    break;

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
      changeTable={changeTable}
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

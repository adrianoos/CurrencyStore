import './App.css';
import { fetchData } from './Components';



const App = () => {

const tableType = 'A'
const getData = async () =>{
const response = await fetchData(tableType)
console.log(response)
}

 getData()

  return (
    <div className="App">

    </div>
  );
}

export default App;

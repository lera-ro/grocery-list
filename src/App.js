import './App.css';
import { GroceryList } from './GroceryList';
import imageOne from './img-one.jpg';
import imageTwo from './img-two.jpg';


function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={imageOne} alt='img' width="200px"/>
      </div>
      <div className='container'>
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className='container'>
        <img src={imageTwo} alt='img' width="200px"/>
      </div>
      
    </div>
  );
}

export default App;

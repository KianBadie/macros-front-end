import { useState } from 'react';
import Search from './components/Search';
import FoodList from './components/FoodList';

function App() {
  
  const [foodList, setFoodList] = useState([]);

  function addFood(newFood) {
    setFoodList([...foodList, newFood]);
  }

  return (
    <div>
      <h1>Recipe Breakdown</h1>
      <Search addFood={addFood}/>
      <FoodList foodList={foodList}/>
    </div>
  );

}

export default App;

import { useState } from 'react';
import Search from './components/Search';
import IngredientList from './components/IngredientList';
import Analytics from './components/Analytics';

function App() {
  
  const [ingredientList, setIngredientList] = useState([]);

  function addIngredient(newFood) {
    const ingredient = {
      fdcId: newFood.fdcId,
      food: newFood,
      amount: newFood.servingSize,
      unit: newFood.servingSizeUnit
    };

    setIngredientList([...ingredientList, ingredient]);
  }

  function modifyIngredient(id, newAmount) {
    const modifiedIngredientList = ingredientList.map(ingredient => {
      if(ingredient.id === id) {
        return {...ingredient, amount: newAmount }
      }
      return ingredient;
    });

    setIngredientList(modifiedIngredientList);
  }

  return (
    <div>
      <h1>Recipe Breakdown</h1>
      <Search addIngredient={addIngredient}/>
      <IngredientList ingredientList={ingredientList} modifyIngredient={modifyIngredient}/>
      <Analytics ingredientList={ingredientList}/>
    </div>
  );

}

export default App;

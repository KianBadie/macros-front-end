import { useState, useRef } from 'react';
import Header from './components/Header'
import Search from './components/Search';
import IngredientList from './components/IngredientList';
import Analytics from './components/Analytics';
import Footer from './components/Footer/Footer';
import { CSSTransition } from 'react-transition-group';

import styles from './App.module.css';

function App() {
  
  const [ingredientList, setIngredientList] = useState([]);

  const tranistionContainer = useRef(null);

  function addIngredient(newFood) {
    const ingredient = {
      id: newFood.fdcId,
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

  function deleteIngredient(id) {
    const remainingIngredients = ingredientList.filter((ingredient) => ingredient.id !== id);
    setIngredientList(remainingIngredients);
  }

  return (
    <div className={styles.app}>
      <Header/>
      <Search addIngredient={addIngredient}/>
      <CSSTransition
        nodeRef={tranistionContainer}
        in={ingredientList.length > 0}
        timeout={1000}
        exit={false}
        unmountOnExit
        classNames={{
          enter: styles['transition-enter'],
          enterActive: styles['transition-enter-active']
        }}
      >
        <div ref={tranistionContainer}>
          <IngredientList ingredientList={ingredientList} modifyIngredient={modifyIngredient} deleteIngredient={deleteIngredient}/>
          <Analytics ingredientList={ingredientList}/>
        </div>
      </CSSTransition>
      <Footer/>
    </div>
  );

}

export default App;

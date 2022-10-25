import { useState } from 'react';
import FoodTitle from '../FoodTitle/FoodTitle';
import { ReactComponent as RemoveIcon } from '../../removeIcon.svg';

import styles from './IngredientItem.module.css';

function IngredientItem(props) {

    const ingredient = props.ingredient;

    const [amountInputValue, setAmountInputValue] = useState(ingredient.amount);

    function onChange(e) {
        const id = ingredient.id;
        const value = e.target.value;
        const amount = parseInt(value) || 0;
        setAmountInputValue(value);
        props.modifyIngredient(id, amount);
    }

    return (
        <li className={styles['ingredient-item']}>
            <button className={styles['delete-btn']} onClick={() => props.deleteIngredient(ingredient.id)}>
                <RemoveIcon />
            </button>
            <FoodTitle food={ingredient.food}/>
            <span>
                <input
                    id='ingredient-amount-input' 
                    type='number' 
                    value={amountInputValue}
                    onChange={onChange}
                    className={styles['ingredient-input']}
                />
                <span className={styles.unit}>{ingredient.unit}</span>
            </span>
        </li>
    );
    
}

export default IngredientItem;
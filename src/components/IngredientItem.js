import { useState } from 'react';
import { ReactComponent as RemoveIcon } from '../removeIcon.svg';

import styles from './IngredientItem.module.css';

function IngredientItem(props) {

    const ingredient = props.ingredient;
    const food = ingredient.food;

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
            <div className={styles['title-container']}>
                <h3 className={styles.title}>{food.description}</h3>
                <p className={styles.brand}>{food.brandName}</p>
            </div>
            <span>
                <input
                    id='ingredient-amount-input' 
                    type='number' 
                    value={amountInputValue}
                    onChange={onChange}
                    className={styles['ingredient-input']}
                />
                {ingredient.unit}
            </span>
        </li>
    );
    
}

export default IngredientItem;
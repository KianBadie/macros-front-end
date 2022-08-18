import { useState } from 'react';

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
        <li>
            <h3>{food.description}</h3>
            <p>{food.brandName}</p>
            <input
                id='ingredient-amount-input' 
                type='number' 
                value={amountInputValue}
                onChange={onChange}
            />
            <span>{ingredient.unit}</span>
            <button onClick={() => props.deleteIngredient(ingredient.id)}>
                Delete
            </button>
        </li>
    );
    
}

export default IngredientItem;
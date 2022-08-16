import { useState } from 'react';

function IngredientItem(props) {

    const [amount, setAmount] = useState(props.ingredient.amount);

    function onChange(e) {
        const id = props.ingredient.id;
        const amount = parseInt(e.target.value);
        setAmount(amount);
        props.modifyIngredient(id, amount);
    }

    const ingredient = props.ingredient;
    const food = ingredient.food;

    return (
        <li>
            <h3>{food.description}</h3>
            <p>{food.brandName}</p>
            <input
                id='ingredient-amount-input' 
                type='number' 
                value={amount}
                onChange={onChange}
            />
            <p>{ingredient.unit}</p>
        </li>
    );
    
}

export default IngredientItem;
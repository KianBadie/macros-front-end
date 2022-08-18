function Result(props) {

    const food = props.food;
    const energyNutrient = food.foodNutrients.find(el => el.nutrientId === 1008);

    return (
        <li>
            <h3>{food.description}</h3>
            <p>{food.brandName}</p>
            <p>{energyNutrient.value}{energyNutrient.unitName} / 100{food.servingSizeUnit}</p>
            <button onClick={() => props.addIngredient(food)}>Add</button>
        </li>
    );
    
}

export default Result;
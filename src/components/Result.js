import './Result.css';

function Result(props) {

    const food = props.food;
    const energyNutrient = food.foodNutrients.find(el => el.nutrientId === 1008);

    return (
        <li className='search__result result'>
            <div className='result__title-container'>
                <h3 className='result__title'>{food.description}</h3>
                <p className='result__brand'>{food.brandName}</p>
            </div>
            <p className='result__calories'>{energyNutrient.value}{energyNutrient.unitName} / 100{food.servingSizeUnit}</p>
            <button className='result__btn' onClick={() => props.addIngredient(food)}>Add</button>
        </li>
    );
    
}

export default Result;
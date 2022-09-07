import FoodTitle from './FoodTitle';
import { ReactComponent as AddIcon } from '../addIcon.svg';

import styles from './Result.module.css';

function Result(props) {

    const food = props.food;
    const servingSize = food.servingSize;
    const energyNutrient = food.foodNutrients.find(el => el.nutrientId === 1008);
    const energyPerServing = Math.round( (energyNutrient.value / 100) * servingSize );

    return (
        <li className={styles.result}>
            <FoodTitle food={food} />
            <p className={styles.calories}>{energyPerServing} cal / {Math.round(servingSize)} {food.servingSizeUnit}</p>
            <button className={styles['add-btn']} onClick={() => props.addIngredient(food)}>
                <AddIcon />
            </button>
        </li>
    );
    
}

export default Result;
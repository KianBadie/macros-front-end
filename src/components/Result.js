import { ReactComponent as AddIcon } from '../addIcon.svg';

import styles from './Result.module.css';

function Result(props) {

    const food = props.food;
    const brand = food.brandName || food.brandOwner;
    const servingSize = food.servingSize;
    const energyNutrient = food.foodNutrients.find(el => el.nutrientId === 1008);
    const energyPerServing = Math.round( (energyNutrient.value / 100) * servingSize );

    return (
        <li className={styles.result}>
            <div className={styles['title-container']}>
                <h3 className={styles.title}>{food.description}</h3>
                <p className={styles.brand}>{brand}</p>
            </div>
            <p className={styles.calories}>{energyPerServing} cal / {servingSize} {food.servingSizeUnit}</p>
            <button className={styles['add-btn']} onClick={() => props.addIngredient(food)}>
                <AddIcon />
            </button>
        </li>
    );
    
}

export default Result;
import styles from './Result.module.css';

function Result(props) {

    const food = props.food;
    const energyNutrient = food.foodNutrients.find(el => el.nutrientId === 1008);

    return (
        <li className={styles.result}>
            <div className={styles['title-container']}>
                <h3 className={styles.title}>{food.description}</h3>
                <p className={styles.brand}>{food.brandName}</p>
            </div>
            <p className={styles.calories}>{energyNutrient.value}{energyNutrient.unitName} / 100{food.servingSizeUnit}</p>
            <button className={styles['add-btn']} onClick={() => props.addIngredient(food)}>Add</button>
        </li>
    );
    
}

export default Result;
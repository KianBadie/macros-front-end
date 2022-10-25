import styles from './FoodTitle.module.css';

function FoodTitle(props) {

    const food = props.food;
    const brand = food.brandName || food.brandOwner;

    return (
        <div className={styles['food-title']}>
            <h3 className={styles.title}>{food.description}</h3>
            <p className={styles.brand}>{brand}</p>
        </div>
    );

}

export default FoodTitle;
import SectionTitle from './SectionTitle';
import IngredientItem from './IngredientItem';

import styles from './IngredientList.module.css';

function IngredientList(props) {

    const ingredientList = props.ingredientList.map(ingredient => (
        <IngredientItem
            key={ingredient.id}
            ingredient={ingredient}
            modifyIngredient={props.modifyIngredient}
            deleteIngredient={props.deleteIngredient}
        />
    ));

    return (
        <div className={styles['ingredient-list']}>
            <SectionTitle title='Ingredient List' />
            <ul className={styles.list}>
                {ingredientList}
            </ul>
        </div>
    );
}

export default IngredientList;
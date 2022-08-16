import IngredientItem from './IngredientItem';

function FoodList(props) {

    const ingredientList = props.ingredientList.map(ingredient => (
        <IngredientItem
            key={ingredient.fdcId}
            ingredient={ingredient}
            modifyIngredient={props.modifyIngredient}
        />
    ));

    return (
        <div>
            <h2>Ingredient List</h2>
            <ul>
                {ingredientList}
            </ul>
        </div>
    );
}

export default FoodList;
import IngredientItem from './IngredientItem';

function IngredientList(props) {

    const ingredientList = props.ingredientList.map(ingredient => (
        <IngredientItem
            key={ingredient.id}
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

export default IngredientList;
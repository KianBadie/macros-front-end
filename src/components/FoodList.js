function FoodList(props) {

    const foodList = props.foodList.map(food => (
        <li key={food.fdcId}>
            <h3>{food.description}</h3>
        </li>
    ));

    return (
        <div>
            <h2>Food List</h2>
            <ul>
                {foodList}
            </ul>
        </div>
    );
}

export default FoodList;
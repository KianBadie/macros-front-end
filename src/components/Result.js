function Result(props) {
    return (
        <li>
            <h3>{props.description}</h3>
            <p>{props.brandName}</p>
            <p>{props.energy}KCAL/{props.servingSize}{props.servingSizeUnit}</p>
        </li>
    );
}

export default Result;
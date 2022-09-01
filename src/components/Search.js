import { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import Result from './Result';

import styles from './Search.module.css';

function Search(props) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    function handleChange(e) {
        setQuery(e.target.value);
    }

    function addIngredient(newFood) {
        setQuery('');
        setResults([]);
        props.addIngredient(newFood);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://${window.location.hostname}:8000/search/${query}`);
            const data = await res.json();
            const results = data.foods.filter( (food) => food.foodNutrients.some((nutrient) => nutrient.nutrientId == 1008) );
            setResults(results);
        };

        let fetchTimeout;

        if(query) fetchTimeout = setTimeout(fetchData, 1000);

        return () => clearTimeout(fetchTimeout);
    }, [query]);

    const resultList = results.map(result => (
        <Result
            key={result.fdcId}
            food={result}
            addIngredient={addIngredient}
        />
    ));

    return (
        <div className={styles.search}>
            <SectionTitle title='Search' />
            <div className={`${styles['search-container']} ${resultList.length > 0 ? styles['search-container-results'] : ''}`}>
                <input 
                    type='search'
                    value={query}
                    onChange={handleChange}
                    className={styles.bar}
                    placeholder='Jasmine Rice...'
                />
                <ul className={styles['result-list']}>
                    {resultList}
                </ul>
            </div>
        </div>
    );

}

export default Search;
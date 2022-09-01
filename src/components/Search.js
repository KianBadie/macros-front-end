import { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import Result from './Result';

import styles from './Search.module.css';

function Search(props) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    function handleSubmit(e) {
        const fetchData = async () => {
            const res = await fetch(`http://${window.location.hostname}:8000/search/${query}`);
            const data = await res.json();
            const results = data.foods.filter( (food) => food.foodNutrients.some((nutrient) => nutrient.nutrientId == 1008) );
            setResults(results);
        };

        e.preventDefault();

        if(query) fetchData();
    }

    function handleChange(e) {
        setQuery(e.target.value);
    }

    function addIngredient(newFood) {
        setQuery('');
        setResults([]);
        props.addIngredient(newFood);
    }

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
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input 
                        type='search'
                        value={query}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder='Jasmine Rice...'
                    />
                    <button type='submit' className={styles.submit}>Search</button>
                </form>
                <ul className={styles['result-list']}>
                    {resultList}
                </ul>
            </div>
        </div>
    );

}

export default Search;
import { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import Result from './Result';

import styles from './Search.module.css';

function Search(props) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [resultsContainerShowing, setResultsContainerShowing] = useState(false);
    const [fetching, setFetching] = useState(false);

    function handleSubmit(e) {
        const fetchData = async () => {
            const res = await fetch(`http://${window.location.hostname}:8000/search/${query}`);
            const data = await res.json();
            const results = data.foods.filter( (food) => food.foodNutrients.some((nutrient) => nutrient.nutrientId == 1008) );
            setFetching(false);
            setResults(results);
        };

        e.preventDefault();

        if(query) {
            setFetching(true);
            fetchData();
            setResultsContainerShowing(true);
        }
    }

    function handleChange(e) {
        setQuery(e.target.value);
        setResults([]);
        setResultsContainerShowing(false);
    }

    function addIngredient(newFood) {
        setQuery('');
        setResults([]);
        setResultsContainerShowing(false);
        props.addIngredient(newFood);
    }

    const resultListTemplate = (
        <ul className={styles['result-list']}>
            {results.map(result => (
                <Result
                    key={result.fdcId}
                    food={result}
                    addIngredient={addIngredient}
                />
            ))}
        </ul>
    );

    const emptyResultsTemplate = (
        <div className={styles['empty-results']}>No foods found.</div>
    );

    const resultsLoadingTemplate = (
        <div className={styles.loader}></div>
    );

    return (
        <div className={styles.search}>
            <SectionTitle title='Search' />
            <div className={`${styles['search-container']} ${resultsContainerShowing && styles['search-container-results']}`}>
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
                <div 
                    className={styles['results-container']} 
                    style={resultsContainerShowing ? {} : { display: 'none' }}
                >
                    {(() => {
                        if(fetching) {
                            return resultsLoadingTemplate;
                        } else if (results.length > 0) {
                            return resultListTemplate;
                        } else {
                            return emptyResultsTemplate;
                        }
                    })()}
                </div>
            </div>
        </div>
    );

}

export default Search;
import { useState, useEffect } from 'react';
import Result from './Result';

import './Search.css'

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
            const res = await fetch(`http://localhost:8000/search/${query}`);
            const data = await res.json();
            setResults(data.foods);
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
        <div className='search'>
            <h2 className='search__title'>
                <label htmlFor='food-search-input'>
                    Search
                </label>
            </h2>
            <div className='search__search-container'>
                <input 
                    id='food-search-input' 
                    type='search'
                    value={query}
                    onChange={handleChange}
                    className='search__bar'
                    placeholder='Jasmine Rice...'
                />
                {resultList.length > 0 &&
                    <div className='search__separator'></div>
                }
                <ul className='search__result-list'>
                    {resultList}
                </ul>
            </div>
        </div>
    );

}

export default Search;
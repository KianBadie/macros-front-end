import { useState, useEffect } from 'react';

function Search(props) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    function handleChange(e) {
        setQuery(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            const params = new URLSearchParams({query});
            const res = await fetch(`http://localhost:8000/search/${params}`);
            const data = await res.json();
            setResults(data.foods);
        };

        if(query) fetchData();
    }, [query]);

    const resultList = results.map(result => (
        <li key={result.fdcId}>
            <span>{result.brandName} {result.description}: {result.foodCategory}</span>
        </li>
    ));

    return (
        <div>
            <label htmlFor='food-search-input'>
                Search
            </label>
            <input 
                id='food-search-input' 
                type='search'
                value={query}
                onChange={handleChange}
            />
            <ul>
                {resultList}
            </ul>
        </div>
    );

}

export default Search;
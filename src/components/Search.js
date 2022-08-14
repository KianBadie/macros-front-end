import { useState, useEffect } from 'react';
import Result from './Result';

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

        let fetchTimeout;

        if(query) fetchTimeout = setTimeout(fetchData, 1000);

        return () => clearTimeout(fetchTimeout);
    }, [query]);

    const resultList = results.map(result => (
        <Result
            key={result.fdcId}
            fdcId={result.fdcId}
            description={result.description}
            brandName={result.brandName}
        />
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
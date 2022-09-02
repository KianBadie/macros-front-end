const PORT = 8000;
const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/api/search/:food', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.nal.usda.gov/fdc/v1/foods/search',
        params: {
            api_key: process.env.FOOD_DATA_API_KEY,
            query: req.params.food,
            dataType: 'Branded',
            pageSize: 5
        }
    };

    axios.request(options).then((apiRes) => {
        res.json(apiRes.data);
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
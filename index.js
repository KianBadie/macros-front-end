const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.get('/search/:food', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.nal.usda.gov/fdc/v1/foods/search',
        params: {
            api_key: process.env.FOOD_DATA_API_KEY,
            query: req.params.food,
            pageSize: 5
        }
    };

    axios.request(options).then((apiRes) => {
        res.json(apiRes.data);
    }).catch((err) => {
        console.log(error);
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
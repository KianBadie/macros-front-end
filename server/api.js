const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const APIKEY = process.env.FOOD_DATA_API_KEY;

router.get('/search/:food', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.nal.usda.gov/fdc/v1/foods/search',
        params: {
            api_key: APIKEY,
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

module.exports = router;
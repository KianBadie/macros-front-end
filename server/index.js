const express = require('express');
const path = require('path');

const api = require('./api');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
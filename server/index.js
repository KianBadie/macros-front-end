const express = require('express');
const path = require('path');

const api = require('./api');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));
app.use('/api', api);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
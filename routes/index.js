const app = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

app.use('/api', apiRoutes)

app.use((req,res) => {
    res.sendFile(path.join(__dirname), '../client/build/index.html');
});

module.exports = app;
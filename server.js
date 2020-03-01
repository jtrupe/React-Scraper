require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app= express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//for production
if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
}

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/React-Scraper';

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});
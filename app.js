const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const bodyParser = require('body-parser')
require('dotenv/config');
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());
/* app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json()); */

// Import routes
const postsRoute= require('./routes/posts');
//Middleware
/* app.use('/posts', () => {
    console.log('This is a middleware running')
}) */

//ROUTES
// Passed on to routes folder
app.use('/posts', postsRoute);
app.get('/', (req,res) => {
    res.send('We are on home');
});

//Connect to DB;
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true},() => 
console.log('Connected to DB!')
);

// LISTENER
app.listen(3000);
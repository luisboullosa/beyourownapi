const express = require('express');
const Mongoose = require('mongoose');
const app = express();
require('dotenv/config');
// Import routes
const postsRoute= require('./routes/posts')
//Middleware
/* app.use('/posts', () => {
    console.log('This is a middleware running')
}) */

//ROUTES
// Passed on to routes folder
app.use('/posts', postsRoute)
app.get('/', (req,res) => {
    res.send('We are on home');
})

//Connect to DB;
Mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true},() => 
console.log('Connected to DB!')
);

// LISTENER
app.listen(3000);
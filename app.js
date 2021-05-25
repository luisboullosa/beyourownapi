const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const bodyParser = require('body-parser')
const dotenv = require('dotenv');

dotenv.config();

app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());

// Import routes
const postsRoute= require('./routes/posts');


//ROUTES
// Passed on to routes folder
app.use('/posts', postsRoute);
app.get('/', (req,res) => {
    res.send('We are on home');
});


// mongoose.set('debug', true)
//Connect to DB;
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true},() => 
    console.log('Connected to DB!')
);




// LISTENER
app.listen(3000);
const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Import routes
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true  }, () => {
    console.log('connected');
});

//Listen to the server.
app.listen(5000);
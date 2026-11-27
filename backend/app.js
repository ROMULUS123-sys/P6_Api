const express = require("express")
const bodyParser = require("body-parser")
const mongose = require("mongoose")
const userRoutes = require('./routes/user');
const path = require('path');

const bookroutes = require("./routes/book")

const app = express()

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization")
    res.setHeader("Access-Control-Allow-Methods", "Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS")
})

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

app.use(bodyParser.json())

module.exports = app
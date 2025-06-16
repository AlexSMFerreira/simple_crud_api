const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
const app = express()
// Load environment variables from .env file
require('dotenv').config();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);

mongoose.connect(process.env.DATABASE_URI)
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
        
})
.catch(() => {
    console.log("Error connecting to database");
})

app.get('/', (req, res) => {
   res.send("Hello from Node API"); 
});

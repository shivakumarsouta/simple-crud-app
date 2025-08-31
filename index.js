const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ProductRoute = require("./routes/product.route.js");
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/products", ProductRoute);


app.get('/', (req, res) => {
    res.send("Hello from node API Server updated");
})


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to database");
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
})
.catch(()=>{
    console.log("Connection failed")
})
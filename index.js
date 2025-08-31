const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ProductRoute = require("./routes/product.route.js");

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/products", ProductRoute);


app.get('/', (req, res) => {
    res.send("Hello from node API Server updated");
})


mongoose.connect("mongodb+srv://admin:123@backenddb.jydcm3x.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to database");
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
})
.catch(()=>{
    console.log("Connection failed")
})
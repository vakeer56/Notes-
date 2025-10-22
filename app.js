const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.json({message: "The server is working fine", status: 200})
})


app.listen( port, () => {
    console.log("Server is running on port", port);
})

// hey this is a comment from varun to test git changes
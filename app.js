const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 5000;

//establishing connection b/w app and database
mongoose.connect("mongodb://localhost:27017/notesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
    console.log("Connected to MongoDB successfully");
});
db.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
});

const studentRoutes = require('./Routes/studentRoutes');
const adminRoutes = require('./Routes/adminRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')) //to access the files publicly

app.get("/", (req, res) => {
    res.json({ message: "The server is working fine", status: 200 });
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});
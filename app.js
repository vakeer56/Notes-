const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const studentRoutes = require("./Routes/studentRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const notesRoutes = require("./Routes/notesRoutes");
const updateRoutes = require("./Routes/updateRoutes");

const port = 5000;

// DB connection
mongoose.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});

// Middlewares first
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/notes",notesRoutes);
app.use("/student",studentRoutes);
app.use("/admin", adminRoutes);
app.use("/notes", updateRoutes);


app.get("/", (req, res) => {
    res.json({ message: "The server is working fine", status: 200 });
});

app.listen(port, () => {
    console.log("Server is running on port", port);
})

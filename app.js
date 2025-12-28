const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


require("dotenv").config();


const studentRoutes = require("./Routes/studentRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const notesRoutes = require("./Routes/notesRoutes");
const updateRoutes = require("./Routes/updateRoutes");

const port = 5000;
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});
      
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use("/uploads", express.static("uploads"));

// Routes (FIXED)
app.use("/student", studentRoutes);
app.use("/admin", adminRoutes);
app.use("/notes", updateRoutes);
app.use("/notes", notesRoutes);

app.get("/", (req, res) => {
    res.json({ message: "The server is working fine", status: 200 });
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});

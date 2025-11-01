const express = require("express");
const bcrypt = require("bcrypt");
const Student = require("../model/student");

const router = express.Router();


//To register a new student

router.post("/register", async (req, res) => {
    try {
        const {student_id, name, email, password, department, year} = req.body;

        const existing = await Student.find({email});
        if (existing) return res.status(400).json({error: "Email already registered"});

        const hash = await bcrypt.hash(password, 10);

        const newStudent = new Student( {
            student_id,
            name,
            email,
            password: hashed,
            department,
            year
        });

        await newStudent.save();
    }
    catch(error) {
        res.status(500).json({error: "Failed to Register"})
    }

    // To login the student
    router.post('/login', async (req, res) => {
        const {email, password} = req.body;

        const student = await Student.findOne({email});
        if (!student) {
            res.status(400).json({error: "Invalid email or password"})
        }
        const isMatch = await bcrypt.compare(password, Student.password);
        if (!isMatch) {
            res.status(400).json({error: "Invalid email or password"});
        }

        res.status(201).json({message: "Login successful"})
    })

})

module.exports = router;
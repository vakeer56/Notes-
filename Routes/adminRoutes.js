const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../model/admin');

const router = express.Router();

// To Register a new Admin 

router.post('/register', async (req, res) => {
    try {
        const {admin_id, name, email, password} = req.body;

        const existing = await Admin.find({email});
        if (!existing) res.status(400).json({message: "Email already exists"})
        
        const hashed = await bcrypt.hash(password,10);

        const newAdmin = new Admin({
            admin_id,
            name,
            email,
            password: hashed
        })

        await newAdmin.save();
    }
    catch(error) {
        res.status(500).json({error: "Failed to register"})
    }
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const admin = await Admin.findOne({email});
    if (!admin)
})
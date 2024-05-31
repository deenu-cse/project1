const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const collection = require("./Mongo");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employes")
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () => {
            console.log("Server running");
        });
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

// Route for Sign In
app.post('/api/SignIn', (req, res) => {
    collection.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});

// Route for Log In
app.post("/api/LogIn", (req, res) => {
    const { email, password } = req.body;
    collection.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Incorrect Password");
                }
            } else {
                res.json("No record exists");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Internal Server Error");
        });
});

// Other routes...

module.exports = app; // Export app for testing purposes

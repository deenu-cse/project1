const mongoose = require("mongoose");

const Employeschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Employe = mongoose.model("employes", Employeschema); // Change 'collection' to 'Employe'

module.exports = Employe; // Export the model, not the collection

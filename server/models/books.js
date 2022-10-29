/*
Student Name: Prince Kiritkumar Patel
Student ID: 301277354
Date: 29 Oct 2022
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "bookscollection"
});

module.exports = mongoose.model('Book', Book);

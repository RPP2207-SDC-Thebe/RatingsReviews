// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/sdc-reviews')

var app = express();
const db = mongoose.connection;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


app.listen(process.env.PORT, () => console.log(`Server on localhost ${process.env.PORT}`));
db.once('open', () => console.log('Connection to Database Established!'));




/*
  Reviews = {
    review_id: Number,
    product_id: Number,
    rating: Number,
    summary: String,
    recommend: Boolean,
    body: String,
    reviewer_name: String,
    helpfulness: Number
  }
  Meta = {
    product_id: Number,
    recommended: Object,
    ratings: Object,
    characteristics: Object(
      fit: String,
      length: String,
      comfort: String,
      quality: String
    )
  }

*/
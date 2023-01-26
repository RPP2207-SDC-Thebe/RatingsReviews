require('dotenv').config();
const express = require('express');
const { connectToDb, getDb } = require('./db.js');

// initialize & middleware
var app = express();

// connect to db
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(process.env.PORT, () => console.log(`Server on localhost:${process.env.PORT}`));
    db = getDb()
  }
})

app.use(express.json());

async function getReview(reviewId) {
  try {
    const oneReview = await db.collection('Reviews').findOne( { id: reviewId } );
  } catch (error) {
    throw error;
  }
}

// ROUTES

// GET Routes
app.get('/', (req, res) => {
  res.status(200).send('Welcome!')
})

app.get('/allReviews/:id', (req, res) => {
  const reviewId = parseInt(req.params.id);
  db.collection('Reviews')
  .findOne( { id: reviewId } )
  .then((result) => {
    res.status(200).send(result);
  })
})

// PUT/POST Routes

// app.post('/reviews/userReview')

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
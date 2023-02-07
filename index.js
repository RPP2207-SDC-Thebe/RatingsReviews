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

// function getNextSequence() {
//   var ret = db.collection('counters').findAndModify(
//     {
//       query: { _id: 'userid' },
//       update: { $inc: { seq: 1 } },
//       new: true
//     }
//   );
//   return ret.seq;
// }

// ROUTES

// GET Routes
// app.get('/', (req, res) => {
//   res.status(200).send('Welcome!')
// })

app.get('/allReviews/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  db.collection('Reviews').find( { product_id: productId } )
    .toArray(function(err, results) {
      if (err) {
        console.log(err)
      }
      res.status(200).send(results)
    })
})

// PUT/POST Routes

app.post('/reviews/userReview', (req, res) => {
  console.log('this the req:', req.body)
  var input = req.body;
  // db.collection('Reviews').insert(
  //   {
  //     id: getNextSequence(),
  //     reviewer_name: req.body.nickName,
  //     reviewer_email: req.body.email,
  //     rating: req.body.rating,
  //     recommend: req.body.recommend,
  //     body: req.body.reviewBody,
  //     summary: req.body.reviewSummary
  //   }
  // )
  /* write an insert query for the following data structure -- FINAL ID is 5774952
  let currentData = {
      characteristics: characteristics,
      email: email,
      nickName: nickname,
      rating: overallRating,
      recommend: recommend,
      reviewBody: reviewBody,
      reviewSummary: reviewSummary,
      photos: photoList,
  */
})
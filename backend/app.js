const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

// *********** Include the Api routes ***********
const studentRoutes = require("./routes/students");

// *********** Connect to Mongo  ***********
console.log('Attempting to connect to mongoose');

mongoose.connect('mongodb://admin:College1@ds123400.mlab.com:23400/movies')
  .then(() => {
    console.log('Connected to Mongo database!');
  })
  .catch(err  => {
    console.error('App starting error:', err.stack);
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  next();
});

// ******** Setup the Api routes ***********
app.use("/api/students", studentRoutes);

module.exports = app;


var Schema = mongoose.Schema;
var movieSchema  = new Schema({id:Number, title:String, genre: String});
var Movie = mongoose.model('Movie',movieSchema);


var favMovie =  Movie({id: 1, title: "Lord Of The Rings", genre: "Fantasy",id: 2, title: "Scream", genre: "Horror"}, )
/*favMovie.save(function(err)
{
  if(err) throw err;

  console.log('****Movie Saved***');

})
*/






//get one movies
/*
Movie.find({id:1}, function(err, movies)
{
  if(err) throw err;
 
 console.log('***********My fav movies is:')
  console.log(movies);

})
*/

//delete one movie
/*
Movie.remove({id:1}, function(err, movies)
{
  if(err) throw err;
 
 
  console.log(movies);

})
*/

//update one movie

Movie.findOneAndUpdate({id:1},{title:"Hello class"}, function(err, movies)
{
  if(err) throw err;
 
 
  console.log("Updated");
})


Movie.findOneAndDelete({id:4},{title:"Scream"}, function(err, movies)
{
  if(err) throw err;
 
 
  console.log("Deleted");
})





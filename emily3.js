var movies = require('./movies3');

var emilyMovies = movies();
emilyMovies.favMovie = "The Notebook";
console.log("Emily's favorite movie is: " + emilyMovies.favMovie);
let express = require('express');
let axios= require('axios');
// let peliculas=require('./films');


var router = express.Router();
// console.log(axios);


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { 
//     title: 'Express',
//     peliculas,
//   rutaFoto });
// });
router.get('/', async function(req, res, next) {

      const API_URL = 'https://api.themoviedb.org/3/';
      const API_KEY = '9ec2c792cfa94b0acb15cb59b0051990';
      const API_POPULAR_URL = 'movie/popular';
      let peliculas;
      let films = await axios.get(API_URL + API_POPULAR_URL + '?api_key=' + API_KEY)
      peliculas = films.data.results;
      //peliculas["poster_path"]=URL_IMAGE + peliculas["poster_path"];
      peliculas.stars = Math.round(peliculas["vote_average"] / 2);

  res.render('index', { 
    title: 'Express',
    peliculas

   });
});


module.exports = router;



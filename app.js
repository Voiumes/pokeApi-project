const express = require('express');
const app = express();
const request = require('request');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const populateDb = require('./populateDb')
// const localDb = require('./AllPokemon.js')

// populateDb()

//-------------Utilities----------------
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//-------------Routes-------------------
app.get('/', function (req, res) {
    res.render('search');
})
app.get('/results', function (req, res) {
    var pokemon = req.query.pokemon.toLowerCase()
    request('https://pokeapi.co/api/v2/pokemon/' + pokemon, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let pokedata = JSON.parse(body)
            res.render('results', { pokedata: pokedata });
        }if(pokemon === ''){
            res.render('notFound');
        }else{
            res.render('notFound');
        }
    })
});
app.get('/localdb', function (req,res){
   request('https://api.mlab.com/api/1/databases/pokerater/collections/pokemon?apiKey=k80veGkVgUj6d5y8b5tHkc0RYqBcGWAg',function (error, response, body){
    if (!error && response.statusCode === 200) {
        let api = JSON.parse(body)
        res.render('myApi', { api: api });
    }else{
        res.render('notFound');
    }
   })
})

app.listen(3000, function(){
    console.log('live port 3000')
});
// app.listen(process.env.PORT, process.env.IP);
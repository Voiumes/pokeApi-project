var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
const express = require('express');
const app = express();
const request = require('request');
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/', function(req, res){
    res.render('search');
})
app.get('/results', function(req,res){
    var pokemon = req.query.pokemon
    request('https://pokeapi.co/api/v2/pokemon/' + pokemon, function(error,response, body){
        if(!error && response.statusCode === 200){
            let pokedata = JSON.parse(body)
            res.render('results', {pokedata: pokedata})
        }
    })
});

app.listen(3000, function(){
    console.log('live port 3000')
});
// app.listen(process.env.PORT, process.env.IP);
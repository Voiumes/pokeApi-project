var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
const express = require('express');
const app = express();
const request = require('request');
app.set('view engine', 'ejs');

app.get('/results', function(req,res){
    request('https://pokeapi.co/api/v2/pokemon/pikachu/', function(error,response, body){
        if(!error && response.statusCode === 200){
            let results = JSON.parse(body)
            let exp ='base_experience'
            console.log(results)
            res.render('results')
        }
    })
});

app.listen(3000, function(){
    console.log('live port 3000')
});

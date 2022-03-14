const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');
const demo = require('./demo.route');
var cors = require('cors')

const r = Router();

// Resolve cors
r.use(cors())

// r.use('/demo', demo);
r.get('/demo', (req, res) => {
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://whiterose:avengers21@cluster0.uimrt.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        console.log("error: " + err);
        var resturant = { name: "Obao"};
        client.db("test").collection("resturants").insertOne(resturant, function(err, res) {
            if (err) throw err;               
            client.close();
        });            
    });
});

r.get('/resturants/:city', (req, res) => {
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://whiterose:avengers21@cluster0.uimrt.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        console.log("error: " + err);       
        var city = '' + req.params.city
        client.db("test").collection("resturants").find({ city: city }).toArray().then(doc => res.json({doc}));           
    });
});

r.get('/neighborhoodresturants/:city', (req, res) => {
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://whiterose:avengers21@cluster0.uimrt.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        console.log("error: " + err);
        var city = '' + req.params.city
        client.db("test").collection("topneighborhoodresturants").find({ city: city }).toArray().then(doc => res.json({doc}));           
    });
});


r.get('/', (req, res) => {
    // res.json(new SuccessResponseObject('express vercel boiler plate'));
    var jsonResponse = {}
    var butterChickenRecipe = {"coverImage": "butter-chicken", "name": "Butter Chicken (Chicken Tikka Masala)"}
    var chickenFettuccineAlfredoRecipe = {"coverImage": "chicken-fettuccine-alfredo", "name": "Chicken Fettuccine Alfredo"}
    var chickenPotatoesRecipe = {"coverImage": "chicken-potatoes", "name": "Chicken and potatoes"}
    var elotaRecipe = {"coverImage": "elota", "name": "Elota"}
    var ramDonRecipe = {"coverImage": "ram-don", "name": "Ram-Don"}
    var softTofuSoupRecipe = {"coverImage": "soft-tofu-soup", "name": "Spicy Soft Tofu Stew (Sundubu Jjigae)"}
    var spaghettiAndMeatballsRecipe = {"coverImage": "spaghetti-and-meatballs", "name": "Spaghetti and meatballs"}
    jsonResponse['recipes'] = [butterChickenRecipe, chickenFettuccineAlfredoRecipe, chickenPotatoesRecipe, elotaRecipe, ramDonRecipe, softTofuSoupRecipe, spaghettiAndMeatballsRecipe]
    res.json(jsonResponse);
});

module.exports = r;

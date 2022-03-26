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
        var resturant = { name: "Obao" };
        client.db("test").collection("resturants").insertOne(resturant, function (err, res) {
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
        client.db("test").collection("resturants").find({ city: city }).toArray().then(doc => res.json({ doc }));
    });
});

r.get('/neighborhoodresturants/:city', (req, res) => {
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://whiterose:avengers21@cluster0.uimrt.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        console.log("error: " + err);
        var city = '' + req.params.city
        client.db("test").collection("topneighborhoodresturants").find({ city: city }).toArray().then(doc => res.json({ doc }));
    });
});


r.get('/', (req, res) => {
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://whiterose:avengers21@cluster0.uimrt.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        console.log("error: " + err);
        var city = '' + req.params.city
        client.db("test").collection("recipes").find({}).toArray().then(doc => res.json({ doc }));
    });

    // res.json(new SuccessResponseObject('express vercel boiler plate'));
    // var jsonResponse = {}
    // var butterChickenRecipe = { "coverImage": "butter-chicken", "name": "Butter Chicken (Chicken Tikka Masala)" }
    // var chickenFettuccineAlfredoRecipe = { "coverImage": "chicken-fettuccine-alfredo", "name": "Chicken Fettuccine Alfredo" }
    // var chickenPotatoesRecipe = { "coverImage": "chicken-potatoes", "name": "Chicken and potatoes" }
    // var elotaRecipe = { "coverImage": "elota", "name": "Elota" }
    // var ramDonRecipe = { "coverImage": "ram-don", "name": "Ram-Don" }
    // var softTofuSoupRecipe = { "coverImage": "soft-tofu-soup", "name": "Spicy Soft Tofu Stew (Sundubu Jjigae)" }
    // var spaghettiAndMeatballsRecipe = { "coverImage": "spaghetti-and-meatballs", "name": "Spaghetti and meatballs" }

    // var cubanBeefStewRecipe = { "coverImage": "cuban-beef-stew", "name": "Cuban Beef Stew" }
    // var boeufBourguignonRecipe = { "coverImage": "boeuf-bourguignon", "name": "Boeuf Bourguignon" }
    // var beefTinaktakRecipe = { "coverImage": "beef-tinaktak", "name": "Beef Tinaktak" }
    // var ghormehSabziRecipe = { "coverImage": "ghormeh-sabzi", "name": "Ghormeh Sabzi" }
    // var chickenAndTwoBeanChiliRecipe = { "coverImage": "chicken-and-two-bean-chili", "name": "Chicken and Two Bean Chili" }
    // var crepesRecipe = { "coverImage": "crepes", "name": "Crepes" }
    // var coqAuVinRecipe = { "coverImage": "coqAuVinRecipe", "name": "Coq Au Vin" }
    // var financiersRecipe = { "coverImage": "financiers", "name": "Financiers" }
    // var onionGaletteRecipe = { "coverImage": "onion-galette", "name": "Onion Galette" }
    // var greenBeanswithShallotsRecipe = { "coverImage": "green-beans-with-shallots", "name": "Green Beans with Shallots" }
    // var croqueMonsieurRecipe = { "coverImage": "croque-monsieur", "name": "Croque-Monsieur" }
    // var frenchOnionSoupRecipe = { "coverImage": "french-onion-soup", "name": "French Onion Soup" }
    // var deviledEggsRecipe = { "coverImage": "deviled-eggs", "name": "Deviled Eggs" }
    // var vietnameseSpringRollsRecipe = { "coverImage": "vietnamese-spring-rolls", "name": "Vietnamese Spring Rolls" }
    // var spinachQuicheRecipe = { "coverImage": "spinach-quiche", "name": "Spinach Quiche" }
    // var shrimpAndAsparagusQuicheRecipe = { "coverImage": "shrimp-and-asparagus-quiche", "name": "Shrimp And Asparagus Quiche" }
    // var chickenParmesanRecipe = { "coverImage": "chicken-parmesan", "name": "Chicken Parmesan" }
    // var italianMeatballsRecipe = { "coverImage": "italian-meatballs", "name": "Italian Meatballs" }
    
    // jsonResponse['recipes'] = [
    //     butterChickenRecipe,
    //     chickenFettuccineAlfredoRecipe,
    //     chickenPotatoesRecipe,
    //     elotaRecipe,
    //     ramDonRecipe,
    //     softTofuSoupRecipe,
    //     spaghettiAndMeatballsRecipe,

    //     cubanBeefStewRecipe,
    //     boeufBourguignonRecipe,
    //     beefTinaktakRecipe,
    //     ghormehSabziRecipe,
    //     chickenAndTwoBeanChiliRecipe,
    //     crepesRecipe,
    //     coqAuVinRecipe,
    //     financiersRecipe,
    //     onionGaletteRecipe,
    //     greenBeanswithShallotsRecipe,
    //     croqueMonsieurRecipe,
    //     frenchOnionSoupRecipe,
    //     deviledEggsRecipe,
    //     vietnameseSpringRollsRecipe,
    //     spinachQuicheRecipe,
    //     shrimpAndAsparagusQuicheRecipe,
    //     chickenParmesanRecipe,
    //     italianMeatballsRecipe
    // ]
    // res.json(jsonResponse);
});

module.exports = r;

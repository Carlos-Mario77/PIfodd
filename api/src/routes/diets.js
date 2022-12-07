const { Router } = require("express");
const { Diet } = require("../db.js");

const router = Router();


//Guardo en un array los tipos de dietas de la página 'spoonacular'
const typesDiets = [
  "Gluten Free",
  "Ketogenic",
  "Vegetarian",
  "Lacto-Ovo-Vegetarian",
  "Vegan",
  "Pescatarian",
  "Paleo",
  "Primal",
  "Low Fodmap",
  "Whole30",
];


router.get("/", async (req, res) => {
    try {
        typesDiets.map((type) => {                  //Mapeo 'typesDiets', 'type' representa cada elemento del array
            Diet.findOrCreate({                     //En 'Diet' busca o crea
                where: { name: type }               //Donde la propiedad 'name' tenga el 'type' de dieta
            });
        });
        const diets = await Diet.findAll();         //Esto trae toda la información
        res.status(200).send(diets);                //Respoonde con todo lo que se trae de la tabla 'Diet' de la DB
        console.log(diets)
    } catch (error) {
        res.status(404).send('No se logró traer tu dieta solicitada.');
        throw new Error('No se logró traer tu dieta solicitada.' + error.message);
    }
  });


module.exports = router;
const { Recipe, Diet } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;


//Función que se conecta a la API
const getApiInfo = async () => {
    const apiUrl = await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5');
    const apiInfo = apiUrl.data.results.map(recipe => {
        const ingredients = new Set();
        recipe.analyzedInstructions.forEach(instruction => {
            instruction.steps.forEach(step => {
                step.ingredients.forEach(ingredient => {
                    ingredients.add(ingredient.name);
                });
            });
        });

        return {
            id: recipe.id,
            name: recipe.title,
            health_Score: recipe.healthScore,
            time: recipe.readyInMinutes,
            servings: recipe.servings,
            image: recipe.image,
            diets: recipe.diets.join(", "),
            cuisines: recipe.cuisines.join(", "),
            ingredients: Array.from(ingredients).join(", "),
            summary: recipe.summary.split("<b>").join(" ").split("</b>").join(" ").split("<a href=").join("\n").split("</a>").join("\n").split(">").join("\n"),
            instructions: recipe.analyzedInstructions[0] ? recipe.analyzedInstructions[0].steps.map((recipe, i) => `${i + 1}: ${recipe.step}`) : ["No existen instrucciones para esta receta."],
            steps: recipe.analyzedInstructions.map(a=>{
                return a.steps.map(as=>{
                    return(`Step ${as.number}: ${as.step}.`);
                });
            }),
            favorites: recipe.aggregateLikes,
        };
    });
    return apiInfo;
};


//Función que une las tablas 'Recipe' y 'Diet' de la DB
const getDbInfo = async () => {
    return await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
};


//Funcío que une la respuesta de la API con la unión de tablas de la DB
const getAllRecipes = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
};


module.exports = {
    getAllRecipes
};
import axios from 'axios';

//Trae todas las recetas cuando se monta la 'Home'
export function getRecipes(){
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/recipes');
        //console.log(json)           //Este console.log me imprime en consola las 100 recetas del Back --> SI FUNCIONA
        return dispatch({ type: 'GET_RECIPES', payload: json.data });
    };
};


//Trae las recetas cuando se buscan en la Searchbar
export function getNameRecipes(name) {                   //name es el payload
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/recipes?name=' + name);     //Por payload llega el nombre, que es lo que es usuario escribe en la barra de búsqueda
            return dispatch ({type: 'GET_NAME_RECIPES', payload: json.data });
        } catch (error) {
            console.log(error);
        }
    };
};


//Se usa en la Searchbar para traer la receta con el 'id' pasado por params
export function getRecipesDetails(id){
    return async function (dispatch){
        try{
            const jsonRecipesDetails = await axios.get(`http://localhost:3001/recipes/${id}`);    //Si funciona, trae la info con el id
            return dispatch({ type: 'GET_RECIPES_DETAILS', payload: jsonRecipesDetails.data });
        } catch(error){
        console.log("Este es el error de getRecipesDetails" + error);
        }
    };
};


//Ordena alfabéticamente las recetas de forma ascendente o descendentemente 
export function orderByNames(order){ 
    return{ type: 'ORDER_BY_NAME', payload: order };
};


//Ordena las recetas por healt score
export function orderByHealthScore(order){
    return{ type: 'ORDER_BY_SCORE', payload: order };
};


//Filtra por dietas cuando se selecciona alguna
export const filterByDiet = (payload) =>{
    return { type: 'FILTER_BY_DIET', payload: payload }
};


//Este esta filtrado para traer solo el name
export function getdiets(){                           
    return async function (dispatch) {
        const info = await axios.get('http://localhost:3001/diets');
        console.log(info)
        return dispatch({ type: 'GET_DIETS', payload: info.data });
    };
};


//Crea las recetas en la DB
export function postRecipes(payload){                     //Se pasa un payload que es el vr a crear en la DB
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/recipes', payload);    //En la ruta queremos hacer el post de payload, por eso se pasa
        return response;                                    //No se usa el dispatch en las rutas tipo post
    };
};


//Elimina las recetas creadas
export function deleteRecipe(id) {
    console.log(id);
    return async function (dispatch) {
      const response = await axios.delete(`http://localhost:3001/recipes/${id}`);
      return dispatch({ type: 'DELETE_RECIPE', payload: response.data });
    };
};


//Modifica las recetas creadas
export const updateRecipe = (id, payload) => {
    console.log(payload, "actualizar")
    return async (dispatch) => {
        const response = await axios.put(`http://localhost:3001/recipes/${id}`, payload);
        return dispatch({ type: 'UPDATE_ACTIVITY', payload: response.data });
    };
};
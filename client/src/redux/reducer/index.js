const initialState = {
    recipes: [],
    allRecipes: [],   //Hace una copia del estado 'recipes' para que al seleccionar otra opción de filtrado, se filtre sobre un nuevo estado con todas las recipes y no un filtro sobre lo que ya estaba filtrado
    recipesDetails: {},
    diets: [],

    //reloadRecipeOne: null    //Estado con el id de la receta nueva 
};//console.log('Soy el estado ' + initialState.recipesDetails);

function rootReducer (state= initialState, action) {
    switch (action.type) {
        case 'GET_RECIPES':         //Se pone el action type en '' para no tener que exportarla e importarla
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload,
            };
        // case 'GET_RECIPES_ID_ONE':  //El case 'RELOAD_RECIPES' se crea para poder ejecutar este case
        // console.log(action.payload);
        // return {
        //     ...state,
        //     recipes: [...state.recipes, action.payload]   //Es necesario que sea un array para que al setear el nuevo vr a este estado, me traiga todas las recetas y no la receta nueva. El 'state.recipes' es todo lo que tengo en 'recipes' y le agrego la nueva receta creda que quiero que se carga la imagen
        //   };
        case 'GET_NAME_RECIPES':     //Para el componente search bar
            return {
                ...state,
                recipes: action.payload 
            };
        case 'GET_RECIPES_DETAILS':
            return{
                ...state,
                recipesDetails: action.payload
            };
        case 'ORDER_BY_NAME':
            function orderByName(a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()){
                    return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                return 0;
            };
            function ordenar(){
                if (action.payload === 'Ascendente'){
                    return [...state.recipes.sort(orderByName)]
                };
                if (action.payload === 'Descendente'){
                    return  [...state.recipes.sort(orderByName).reverse()]
                };
            }
            return {
                ...state,
                recipes: ordenar()
            }
        case 'ORDER_BY_SCORE':
         
            function orderByPob(a, b){
              
                if (a.health_Score < b.health_Score){
                    return 1;
                }
                if (a.health_Score > b.health_Score){
                    return -1;
                }
                return 0;
            }
            function orderScore() {
        
                if (action.payload === 'Mayor'){
                    return [...state.recipes.sort(orderByPob)]
                }
                if (action.payload === 'Menor'){
                    return [...state.recipes.sort(orderByPob).reverse()]
                }
            }
            return{
                ...state,
                recipes: orderScore()
            }


        // case 'FILTER_BY_CUISINE':
        //     //funcrion
        //     function filterCuisine() {
        //         if (action.payload === 'Chinese'){
        //             return [...state.recipes].filter((e) => e.cuisines.includes(action.payload))
        //         }
        //         if (action.payload === 'Asian'){
        //             return [...state.recipes].filter((e) => e.cuisines.includes(action.payload))
        //         }
        //     }
        //     return {
        //         ...state,
        //         recipes: filterCuisine(),
        //     };


        case 'FILTER_BY_DIET':
            const allRecipes = state.allRecipes;
            let filtered = null
          console.log(allRecipes)
            //Este es el respaldo para no hacer un filtro sobre lo filtrado
           
            if (action.payload === "All") {
              return {
                ...state,
                recipes: allRecipes,
              };
            }
            else if (action.payload === "Chinese" || action.payload === "Asian"){
                filtered = allRecipes.filter((e) => e.cuisines.includes(action.payload));
            }
            else{
              
               filtered = allRecipes.filter((e) => !e.createdInDB && e.diets.includes(action.payload));
            }
            return {
                ...state,
                recipes: filtered,
            };



            // case 'FILTER_BY_DIET':
            //     const allRecipes = state.recipes;        //Este es el respaldo para no hacer un filtro sobre lo filtrado
            //     console.log(allRecipes)
            //     let filtered = null;
            //     if (action.payload === "All") {
            //       return {
            //         ...state,
            //         recipes: allRecipes,
            //       };
            //     }
            //     // else if (action.payload === "Chinese" || action.payload === "Asian"){
            //     //     filtered = allRecipes.filter((e) => e.cuisines.includes(action.payload));
            //     // }
            //     else{
            //        //filtered = allRecipes.filter((e) => e.diets.includes(action.payload));
            //       ////const filtered = allRecipes.filter((e) => !e.createdInDB && e.diets.includes(action.payload));
            //     }
            //     return {
            //         ...state,
            //         recipes: filtered,
            //     };







            
        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload
            };

        case 'RELOAD_RECIPES':
            return {
                ...state,
                reloadRecipeOne: action.payload     //El action.payload es el id de la receta nueva
            };
        case 'POST_RECIPES':     //El post no hace nada, pero se debe de poner
            return {
                ...state
            };
        case 'DELETE_ACTIVITY': 
            return {
                ...state,
            };


        case 'UPDATE_RECIPE': {
            return {
                ...state,
                responseCreateActivity: action.payload,
            };
        }
        default:
        return state;
    };
};


export default rootReducer;
const initialState = {
    recipes: [],
    allRecipes: [],   //Hace una copia del estado 'recipes' para que al seleccionar otra opción de filtrado, se filtre sobre un nuevo estado con todas las recipes y no un filtro sobre lo que ya estaba filtrado
    recipesDetails: {},
    diets: []
};

export default function rootReducer (state= initialState, action) {
    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload,
            };
        case 'GET_NAME_RECIPES':
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
        case 'FILTER_BY_CUISINE_AND_DIET':
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
            else if (action.payload === "African" || action.payload === "American" || action.payload === "Asian" || action.payload === "Cajun" || action.payload === "Chinese" || action.payload === "Creole" || action.payload === "European" || action.payload === "Indian" || action.payload === "Italian" || action.payload === "Mediterranean" || action.payload === "Middle Eastern" || action.payload === "Southern"){
                filtered = allRecipes.filter((e) => e.cuisines.includes(action.payload));
            }
            else{
               filtered = allRecipes.filter((e) => !e.createdInDB && e.diets.includes(action.payload));
            }
            return {
                ...state,
                recipes: filtered,
            };          
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
        case 'POST_RECIPES':
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
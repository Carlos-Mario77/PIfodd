const initialState = {
    recipes: [],
    allRecipes: [],   //Hace una copia del estado 'recipes' para que al seleccionar otra opción de filtrado, se filtre sobre un nuevo estado con todas las recipes y no un filtro sobre lo que ya estaba filtrado
    recipesDetails: {},
    diets: []
};//console.log('Soy el estado ' + initialState.recipesDetails);

function rootReducer (state= initialState, action) {
    switch (action.type) {
        case 'GET_RECIPES':         //Se pone el action type en '' para no tener que exportarla e importarla
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload,
            };
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
            function orderPopulation() {
                if (action.payload === 'Mayor'){
                    return [...state.recipes.sort(orderByPob)]
                }
                if (action.payload === 'Menor'){
                    return [...state.recipes.sort(orderByPob).reverse()]
                }
            }
            return{
                ...state,
                recipes: orderPopulation()
            }
        case 'FILTER_BY_DIET':
            const allRecipes = state.allRecipes;
            if (action.payload === "All") {
              return {
                ...state,
                recipes: allRecipes,
              };
            } else {
              const filtered = allRecipes.filter((e) => e.diets.includes(action.payload));
              //const filtered = allRecipes.filter((e) => !e.createdInDB && e.diets.includes(action.payload));
              return {
                ...state,
                recipes: filtered,
              };
            }
        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload
            };            
        case 'POST_RECIPES':     //El post no hace nada xq voy a crearlo en una ruta nueva
            return {
                ...state
            };
        default:
        return state;
    };
};


export default rootReducer;
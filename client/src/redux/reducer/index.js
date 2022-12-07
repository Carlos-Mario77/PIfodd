const initialState = {
    recipes: [],
    allRecipes: [],
    recipesDetails: []
};
//console.log(initialState.occupations)

function rootReducer (state= initialState, action) {

    switch(action.type) {
        case 'GET_RECIPES': 
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload       //Es necesario crear este estado como copia del characters para filtrar
            };











    }
};


export default rootReducer;
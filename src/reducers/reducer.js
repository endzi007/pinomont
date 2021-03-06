
export const filterReducer = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case "FILTER_PROJECTS":
        if(newState.indexOf(action.payload)===-1){
            newState.push(action.payload);
        } else {
            newState.splice(newState.indexOf(action.payload), 1);
        }
        break;
        default: 
        break;
    }
    return newState; 
} 

export const categoriesReducer = (state = {
    categories: [],
    fetching: false, 
    error: false
}, action) => {
    let newState = {...state};
    switch (action.type) {
        case "FETCH_CATEGORIES_START": 
            break;
        case "FETCH_CATEGORIES_OK": 
            newState.categories = action.payload;
            break;
        case "FETCH_CATEGORIES_ERROR": 
            newState.error = action.payload;
            break;
        case "FETCH_PRODUCTS_START": 
            newState.fetching = true;
            break;
        case "FETCH_PRODUCTS_OK": 
            newState.categories[action.payload.index].posts = action.payload.posts;
            break;
        case "FETCH_PRODUCTS_ERROR": 
            newState.error = action.payload;
            break;
        case "GET_LS_CATEGORIES":
            newState.categories = action.payload;
            break;
        case "GET_LS_PRODUCT": {
            newState.categories[action.payload.index].posts= action.payload.posts;
            break;
        }
        case "FETCHING": {
            newState.fetching = action.payload;
            break;
        }
        default: 
        break;
    }
    return newState; 
}



export const appConfigReducer = (state = {
    pageTransition: false,
    transitionDuration: 0.7,
    currentRoute: "",
    showDrawer: false
}, action) =>{
    let newState = {...state};
    switch (action.type){
        case "START_PAGE_TRANSITION":
            newState.pageTransition = action.payload; 
            break;
        case "CHANGE_CURRENT_ROUTE":
            newState.currentRoute = action.payload;
            break;
        case "TOGGLE_SHOW_DRAWER": 
            newState.showDrawer = action.payload;
            break;
        default:
            break;
    }
    return newState;
}

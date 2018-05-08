
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

export const categoriesReducer = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case "ADD_CATEGORIES": 
            newState = action.payload;
            break;
        default: 
        break;
    }
    return newState; 
}


export const appConfigReducer = (state = {
    pageTransition: false,
    transitionDuration: 0.7
}, action) =>{
    let newState = {...state};
    switch (action.type){
        case "START_PAGE_TRANSITION":
            newState.pageTransition = action.payload; 
            break;
        default:
            break;
    }
    return newState;
}
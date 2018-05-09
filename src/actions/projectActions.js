export const filterProjects = (tag) => {
    return {
        type: "FILTER_PROJECTS",
        payload: tag
    }
}

export const startPageTransition = (start) => {
    return {
        type: "START_PAGE_TRANSITION",
        payload: start
    }
}

export const fetchCategories = () =>{
    return (dispatch)=>{
        dispatch({
            type: "FETCH_CATEGORIES_START"
        })
    }
}


export const fetchProducts = (url) =>{
    return (dispatch)=>{
        dispatch({
            type: "FETCH_CATEGORIES_START"
        });
    }
}
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
    return {
        type: "FETCH_CATEGORIES",
    }
}


export const fetchProducts = (url) =>{
    return {
        type: "FETCH_PRODUCTS",
        payload: url
    }
}
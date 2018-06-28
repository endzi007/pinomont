import store from '../store/store';
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
    return (dispatch, getState)=>{
        dispatch({type: "FETCH_CATEGORIES_START"});
        return fetch(`https://public-api.wordpress.com/rest/v1.1/sites/endzibackend.wordpress.com/posts/?category=kategorije&number=100`).then((response)=>{
            return response.json()
        }).then((parsedData)=>{
            let temp = parsedData.posts.map((cat)=>{
                return {title: cat.title, featured_image: cat.featured_image, posts: "", hover: `${cat.featured_image.substr(0, cat.featured_image.length-4)}-3.jpg`}
            });
            dispatch({type: "FETCH_CATEGORIES_OK", payload: temp})
        }).catch((e)=>{
            dispatch({
                type: "FETCH_CATEGORIES_BAD"
            })
        });
    }
}

export const fetchProducts = (url) =>{
    return (dispatch, getState)=>{
        dispatch({
            type: "FETCH_PRODUCTS_START"
        });
        return fetch(`https://public-api.wordpress.com/rest/v1.1/sites/endzibackend.wordpress.com/posts/?category=${url}&number=100`).then((response)=>{
            return response.json()
        }).then((parsedData)=>{
            let index;
            let categories = getState().data.categories; 
            let cur; 
            categories.map((cat, i)=>{
                cur = cat.title.split(" ").join("_");
                if(cur === url ) {
                    index = i;
                    return 
                }
            });
            dispatch({
                type: "FETCH_PRODUCTS_OK",
                payload: {
                    index: index,
                    posts: parsedData.posts
                }
            })
        }).catch((e)=>{
            dispatch({
                type: "FETCH_PRODUCTS_BAD",
                payload: "Error fetching products"
            })
        });
    }
}

export const changeCurrentRoute = (route) =>{
    return  {
        type: "CHANGE_CURRENT_ROUTE",
        payload: route
    }
}

export const toggleShowDrawer = (show) =>{
    return  {
        type: "TOGGLE_SHOW_DRAWER",
        payload: show
    }
}
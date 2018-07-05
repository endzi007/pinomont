
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

export const fetching = (prop)=>{
    return {
        type: "FETCHING",
        payload: prop
    }
}

export const checkLSCategories = () =>{
    return (dispatch, getState)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                try {            
                    let lsCategories = JSON.parse(localStorage.getItem("categories"));
                    if(lsCategories !== null){
                        let temp = lsCategories.map((cat)=>{
                            return {title: cat.title, featured_image: cat.featured_image, posts: "", hover: `${cat.featured_image.substr(0, cat.featured_image.length-4)}-3.jpg`}
                        });
                        resolve({
                            type: "LS_CATEGORIES_OK", 
                            payload: temp
                        });
                    } else { 
                        console.log("bad");
                        resolve({
                            type: "LS_CATEGORIES_BAD", 
                            payload: null
                        });
                    }
                } catch (e){
                    resolve("LS_CATEGORIES_BAD");
                }
                }, 0);
        });
    }
}

export const getLSCategories = (data)=>{
    return {
        type: "GET_LS_CATEGORIES",
        payload: data
    }
}

export const checkLSProduct = (title) =>{
    return (dispatch, getState)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                try {            
                    let product = JSON.parse(localStorage.getItem(title));
                    if(product !== null){
                        let index;
                        let categories = getState().data.categories;
                        let cur; 
                        categories.map((cat, i)=>{
                            cur = cat.title.split(" ").join("_");
                            if(cur === title ) {
                                index = i;
                                return 
                            }
                        });
                        resolve({
                            type: "LS_PRODUCT_OK",
                            payload: {
                                index: index,
                                data: product
                            }
                        })
                    } else {
                        resolve({
                            type: "LS_PRODUCT_BAD"
                        });
                    }
    
                } catch (e){
                    resolve("LS_PRODUCT_BAD");
                }
                }, 0);
        });
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
            try{
                localStorage.setItem("categories", JSON.stringify(temp));
            } catch (e) {
                console.log("unable to set to ls");
            }
            dispatch({type: "FETCH_CATEGORIES_OK", payload: temp})
        }).catch((e)=>{
            dispatch({
                type: "FETCH_CATEGORIES_BAD"
            })
        });
    }
}

export const getLSProduct = (data) =>{
    return {
        type: "GET_LS_PRODUCT",
        payload: {
            index: data.index,
            posts: data.data
        }
    }
}





export const fetchProduct = (url) =>{
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
            try {
                localStorage.setItem(url, JSON.stringify(parsedData.posts));
            } catch(e){
                console.log("e", e);
            }
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


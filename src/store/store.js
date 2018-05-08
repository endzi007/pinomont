import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer, filterReducer, appConfigReducer } from '../reducers/reducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as fetchMiddlewares from '../middlewares/fetchApi'

const defaultState = { 
    filterTags: [],
    appConfig: {
        pageTransition: false, //when true start page fade out animation 
        transitionDuration: 500 //miliseconds
    },
    categories: []
}
window.state = defaultState;
const reducers = combineReducers({
    filterTags: filterReducer,
    appConfig: appConfigReducer,
    categories: categoriesReducer,
});

const middlewares = applyMiddleware(fetchMiddlewares.fetchApi, fetchMiddlewares.filterCategories, fetchMiddlewares.fetchProducts, logger);
const store = createStore(reducers, defaultState, middlewares);

export default store;
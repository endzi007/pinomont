import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer, filterReducer, appConfigReducer } from '../reducers/reducer';
import ReduxThunk from 'redux-thunk' 
import logger from 'redux-logger';
import appConfig from '../appConfig';


const defaultState = { 
    filterTags: [],
    appConfig: {
        pageTransition: appConfig.pageTransition, //when true start page fade out animation 
        transitionDuration: appConfig.transitionDuration, //miliseconds
        currentRoute: ""
    },
    data: {
        categories: [],
        fetching: false,
        error: false
    },

}
window.state = defaultState;
const reducers = combineReducers({
    filterTags: filterReducer,
    appConfig: appConfigReducer,
    data: categoriesReducer,
});

const middlewares = applyMiddleware(ReduxThunk, logger);
const store = createStore(reducers, defaultState, middlewares);

export default store;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer, filterReducer, appConfigReducer } from '../reducers/reducer';
import ReduxThunk from 'redux-thunk' 
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as fetchMiddlewares from '../middlewares/fetchApi'

const defaultState = { 
    filterTags: [],
    appConfig: {
        pageTransition: false, //when true start page fade out animation 
        transitionDuration: 500 //miliseconds
    },
    data: {
        categories: [],
        fetching: false,
        error: false
    },
    styleConfig: {
        primaryColor: "blue",
        secondaryColor: "green",
        thirdColor: "darkgray",
        fourthColor: "whiteGray",
    }
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
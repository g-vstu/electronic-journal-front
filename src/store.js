import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import dataLessonReducer from './reducer/dataLessonReducer';
import fioReducer from './reducers/fioReducer';
import marksReducer from './reducer/marksReducer';

let reducers = combineReducers({ 
      marksPage: marksReducer,
      fioPage: fioReducer,
      dataLessonPage: dataLessonReducer,
      form: formReducer
    });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;
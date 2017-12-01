import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const { SHOW_ALL } = visibilityFilters

const todoApp = combineReducers({

    visibilityFilter,
    todos

})


export default todoApp;



//Reducer changes states by taking an action as an argument, in which it then returns a new state.
//Pass the previous state and actions to the reducer functions
//Reducers are pure functions

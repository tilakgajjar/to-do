
//Actions are payloads of information that send data from your application to your store
//Action Creator - the functions that create actions
//Dispatch() or react-redux connect() method to dispatch actions

let nextToDoId = 0;

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextToDoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

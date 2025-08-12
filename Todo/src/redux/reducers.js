

const initState = {
    todos: [],
}


const rootReducer = (state = initState, action)  => {
  // Define your root reducer logic here
  switch (action.type) {
    case 'todo/addTodo':
        return {
            ...state,
            todos: [...state.todos, action.payload]
        }
        default:
            return state;
        }
}

export default rootReducer;
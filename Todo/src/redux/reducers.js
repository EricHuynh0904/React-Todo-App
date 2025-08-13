const initState = {
    todos: [],
}


const rootReducer = (state = initState, action)  => {
    
  switch (action.type) {
    case 'todo/addTodo':
        return {
        ...state,
        todos: [...state.todos, action.payload]
        }
        
    case 'todo/deleteTodo':
        return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
        }
    

        
        default:
            return state;
        }
}

export default rootReducer;
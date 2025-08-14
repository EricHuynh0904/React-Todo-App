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

    case 'todo/toggleTodo':
        return{
            ...state,
            todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        }
    

        default:
            return state;
        }
}

export default rootReducer;
export const addTodo = (data) => {
    return {
        type: 'todo/addTodo',
        payload: data

    };
}

export const deleteTodo = (id) => {
    return {
    type: 'todo/deleteTodo',
    payload: id
    };
};

export const toggleTodo = (id) => {
    return{
        type: 'todo/toggleTodo',
        payload: id
    }


}

export const deleteCompleted = (id) => {
    return{
        type: 'todo/deleteCompleted',
        payload: id
    }
}

export const selectAllTodos = () => {
    return {
        type: 'todo/selectAll'
    };
}

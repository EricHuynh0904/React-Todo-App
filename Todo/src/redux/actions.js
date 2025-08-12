export const addTodo = (data) => {
    return {
        type: 'todo/addTodo',
        payload: data

    };
}
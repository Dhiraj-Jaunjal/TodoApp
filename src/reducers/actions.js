
// add new todo
export const ADD_TODO = 'ADDTODO';
// Marking our todo as completed or in-complete.
export const TOGGLE_TODO = 'TOGGLETODO'; 
// deleting todo
export const DELETE_TODO = 'DELETETODO';

export const addTodo = (textboxInsertedVal) => {
  console.log('addTodo Action -', textboxInsertedVal);
    // when ever you have to return object use return{}
    return {
      type: ADD_TODO,
      payload: {
        id: Math.random(), // it will always give a unique value between 0-1 like 0.231231
        todoName: textboxInsertedVal,
        isCompleted: false,
        time: `( ${new Date().toLocaleTimeString()} , ${new Date().toDateString()} )`
      }
    }
  };

export const toggleTodo = (id) => {
  console.log('toggleTodo', id);
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const deleteTodo = (id) => {
  console.log('deleteTodo---',id);
    return {
        type: DELETE_TODO,
        payload: id
    }
}
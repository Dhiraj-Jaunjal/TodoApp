import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actions";

const initialState = [];

const todosAppReducer = (state = initialState, action) => {
    console.log('reducer----', action.payload);
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ];
        case TOGGLE_TODO:
            //when ever you have to return function or JSX use return()
            return (state.map((todo) =>
                todo.id === action.payload ? {
                    ...todo,
                    isCompleted: todo.isCompleted === true ? false : true
                    //isCompleted: !todo.isCompleted // (! uses to reverse the boolean value.)
                } : todo
            ));

        case DELETE_TODO:
            return (state.filter((todo) => todo.id !== action.payload));
        default:
            return state;
    }
};

export default todosAppReducer;
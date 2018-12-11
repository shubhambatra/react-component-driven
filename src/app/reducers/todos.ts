import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { TodoActions } from 'app/actions/todos';
import { TodoModel } from 'app/models';

const initialState: RootState.TodoState = [
  {
    id: 1,
    text: 'Use Redux',
    completed: false,
    iconArray: ["fa fa-facebook", "fa fa-twitter", "fa fa-pinterest-p", "fa fa-camera-retro"],
    options: ["Rupah", "Doller", "Euro"],
    topHeaderMenu: [{
        id: 1,
        text: "welcome Msg",
        action: ""
      },
      {
        id: 2,
        text: "my account",
        action: "",
      },
      {
        id: 3,
        text: "my wishlist",
        action: "",
      },
      {
        id: 4,
        text: "login",
        action: "",
      }],
    mainHeaderMenu: [{
      text: "Home",
      action: ""
    },{
      text: "Gallery",
      action: "",
    },{
      text: "Categories",
      action: "",
    },{
      text: "Pages 2",
      action: "",
    }],

  }
];

export const todoReducer = handleActions<RootState.TodoState, TodoModel>(
  {
    [TodoActions.Type.ADD_TODO]: (state, action) => {
      if (action.payload && action.payload.text) {
        return [
          {
            id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
            completed: false,
            text: action.payload.text
          },
          ...state
        ];
      }
      return state;
    },
    [TodoActions.Type.DELETE_TODO]: (state, action) => {
      return state.filter((todo) => todo.id !== (action.payload as any));
    },
    [TodoActions.Type.EDIT_TODO]: (state, action) => {
      return state.map((todo) => {
        if (!todo || !action || !action.payload) {
          return todo;
        }
        return (todo.id || 0) === action.payload.id ? { ...todo, text: action.payload.text } : todo;
      });
    },
    [TodoActions.Type.COMPLETE_TODO]: (state, action) => {
      return state.map((todo) =>
        todo.id === (action.payload as any) ? { ...todo, completed: !todo.completed } : todo
      );
    },
    [TodoActions.Type.COMPLETE_ALL]: (state, action) => {
      return state.map((todo) => ({ ...todo, completed: true }));
    },
    [TodoActions.Type.CLEAR_COMPLETED]: (state, action) => {
      return state.filter((todo) => todo.completed === false);
    }
  },
  initialState
);

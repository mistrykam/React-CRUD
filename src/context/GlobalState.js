import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";

// inital state
const initialState = {
  users: [
    { id: "1", name: "jill@gmail.com" },
    { id: "2", name: "brenda@gmail.com" },
    { id: "3", name: "sally@gmail.com" }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return { users: state.users.filter((user) => user.id !== action.payload) };
    case "ADD_USER":
      return { users: [...state.users, { id: uuid(), name: action.payload }] };
    case "UPDATE_USER":
      let index = state.users.findIndex((user) => user.id === action.payload.id);

      state.users[index].name = action.payload.name;

      return { users: state.users };
    default:
      return state;
  }
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // actions
  const removeUser = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
  };

  const addUser = (name) => {
    dispatch({ type: "ADD_USER", payload: name.toLowerCase() });
  };

  const updateUser = (id, name) => {
    dispatch({ type: "UPDATE_USER", payload: { id: id, name: name } });
  };

  const actions = {
    users: state.users,
    removeUser: removeUser,
    addUser: addUser,
    updateUser: updateUser
  };

  return <GlobalContext.Provider value={actions}>{children}</GlobalContext.Provider>;
};

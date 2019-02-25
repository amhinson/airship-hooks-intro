import React, { useReducer } from 'react';
import { UserContext } from './UserContext';
import UserSearch from './UserSearch';
import Header from './Header';

const INITIAL_STATE = { loading: false, name: '' };

const userReducer = (state, action) => {
  switch (action.type) {
    case 'setName': {
      return { ...state, name: action.payload, loading: false };
    }
    case 'toggleLoading': {
      return { ...state, loading: !state.loading };
    }
    case 'clear': {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

const UserContainer = () => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <h3>Context</h3>
      <Header />
      <UserSearch />
    </UserContext.Provider>
  );
};

export default UserContainer;

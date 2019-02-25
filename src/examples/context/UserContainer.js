import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import UserSearch from './UserSearch';
import Header from './Header';

const UserContainer = () => {
  const [name, setName] = useState('Alex');

  return (
    <UserContext.Provider value={name}>
      <h3>Context</h3>
      <Header />
    </UserContext.Provider>
  );
};

export default UserContainer;

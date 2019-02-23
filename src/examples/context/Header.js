import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Header = () => {
  const { state } = useContext(UserContext);

  return <p>{state.loading ? 'Loading...' : state.name || 'No User'}</p>;
};

export default Header;

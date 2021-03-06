import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Header = () => {
  const name = useContext(UserContext);

  return <p>{name || 'No User'}</p>;
};

export default Header;

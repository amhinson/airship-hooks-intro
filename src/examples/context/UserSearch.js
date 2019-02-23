import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import userAPI from './userAPI';

const UserSearch = () => {
  const { dispatch } = useContext(UserContext);
  const [name, setName] = useState('');

  const setUser = () => dispatch({ type: 'setName', payload: name });
  const clearUser = () => dispatch({ type: 'clear' });
  const getUser = async () => {
    try {
      dispatch({ type: 'toggleLoading' });
      const user = await userAPI();
      dispatch({ type: 'setName', payload: user });
    } catch (e) {
      dispatch({ type: 'toggleLoading' });
    }
  };

  const onChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <input className="nes-input" value={name} onChange={onChange} />
      <button className="nes-btn is-primary" onClick={setUser}>
        Set User
      </button>
      <button className="nes-btn is-error" onClick={clearUser}>
        Clear
      </button>
      <button className="nes-btn" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default UserSearch;

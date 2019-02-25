import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import userAPI from './userAPI';

const UserSearch = () => {
  return (
    <div>
      <input className="nes-input" value={null} onChange={() => {}} />
      <button className="nes-btn is-primary" onClick={() => {}}>
        Set User
      </button>
      <button className="nes-btn is-error" onClick={() => {}}>
        Clear
      </button>
      <button className="nes-btn" onClick={() => {}}>
        Get User
      </button>
    </div>
  );
};

export default UserSearch;

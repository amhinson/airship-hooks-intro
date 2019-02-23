import React from 'react';
import './App.css';

import StateExample from './examples/StateExample';
import EffectsExample from './examples/EffectsExample';
import EffectsExampleTwo from './examples/EffectsExampleTwo';
import EffectsMediaExample from './examples/EffectsMediaExample';
import CustomHookExample from './examples/customHook/SearchContainer';
import ContextExample from './examples/context/UserContainer';

const App = () => {
  const Example =
    //
    StateExample;
  // EffectsExample;
  // EffectsExampleTwo;
  // EffectsMediaExample;
  // CustomHookExample;
  // ContextExample;

  return (
    <div className="App">
      <h1>
        <i className="nes-bulbasaur" />
        Hooooooks
        <i className="nes-charmander" />
      </h1>
      <Example />
    </div>
  );
};

export default App;

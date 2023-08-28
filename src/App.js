// src/App.js

import React, { useState } from 'react';
import './App.css';
import LoginView from './LoginView';
import TabsView from './TabsView';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <div className="App">
        {!isLoggedIn ? (
            <LoginView />
        ) : (
            <TabsView />
        )}
        {/* Mock login functionality */}
        {!isLoggedIn && <button onClick={() => setIsLoggedIn(true)}>Mock Login</button>}
      </div>
  );
}

export default App;

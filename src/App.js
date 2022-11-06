import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/AppBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('UPDATED', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className='app'>
      <Header />

      {isLoggedIn ? (
        <Dashboard />
      ) : (
        // Creating a prop to pass down  setIsLoggedIn state to Login component
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import Home from "./Home.js";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPasswordValue(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('emailData');
    const storedPassword = localStorage.getItem('passwordData');
    if (username === 'abc@gmail.com' && passwordValue === 'admin') {
      localStorage.setItem('emailData', 'abc@gmail.com');
      localStorage.setItem('passwordData', 'admin');
      setIsLoggedIn(true);
     
    } else {
      alert('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    // Redirect to home page
    return <Home />;
  }

  return (
    <div>
     { 
    
    <div className="login-container">      
      <h2>Cloud-Based Healthcare Data Management</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={passwordValue}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
      }
    </div>
  );
};

export default LoginPage;
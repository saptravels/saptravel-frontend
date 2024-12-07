import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login1({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setIsAuthenticated(true);
      navigate('/table');
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <button className="login-popup-close" onClick={() => navigate('/')}>X</button>
        <div className="login-container container">
          <div className="login-right">
            <div className="login-header">
              <i className="fa-solid fa-user"></i>
              <h2>WELCOME</h2>
            </div>
            <div className="login-form">
              <div className="login-input">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-input">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="login-button" onClick={handleLogin}>
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login1;

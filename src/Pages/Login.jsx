// src/components/LoginPopup.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterPage from './Register';
import { loginUser } from '../Slice/userSlice';
import {server} from "../config"

const LoginPopup = ({ onClose }) => {
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${server}/api/v1/login`, {
        email,
        password
      });

      const user = response.data.user; // Adjust based on your API response
      dispatch(loginUser(user));
      toast.success('Login successful!');
      navigate('/admin');
      onClose(); 
    } catch (error) {
      toast.error('Login failed. Please try again.');
      console.error(error.message);
    }
  };

  const handleOpenRegister = () => {
    setRegisterVisible(true);
  };

  const handleCloseRegister = () => {
    setRegisterVisible(false);
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <button className="login-popup-close" onClick={onClose}>
          <h3>X</h3>
        </button>
        <div className="login-container container">
          {!isRegisterVisible ? (
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
                {/* <div className="login-signin">
                  <button onClick={handleOpenRegister}>
                    New User
                  </button>
                </div> */}
              </div>
            </div>
          ) : (
            <RegisterPage onCloseRegister={handleCloseRegister} />
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPopup;

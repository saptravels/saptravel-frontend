// src/components/RegisterPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addUser } from '../Slice/userSlice';
import {server} from "../config"

const RegisterPage = ({ onCloseRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${server}/api/v1/register`, {
        name,
        email,
        password,
        confirmPassword
      });

      const newUser = response.data.newUser; // Ensure this matches the API response
      dispatch(addUser(newUser));
      toast.success(`Registration successful! Welcome, ${newUser.name}`);

      // Optionally, clear form fields if needed
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error(error.message);
    }
  };

  const handleCloseRegister = () => {
    onCloseRegister();
  };

  return (
    <div className="register-container">
      <div className="register-popup-content">
        <div className="register-right">
          <div className="register-header">
            <i className="fa-solid fa-user"></i>
            <h2>CREATE ACCOUNT</h2>
          </div>
          <div className="register-form">
            <div className="register-input">
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="register-input">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="register-input">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="register-input">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button className="register-button" onClick={handleRegister}>
              REGISTER
            </button>
            <div className="register-login">
              <button onClick={handleCloseRegister}>
                Already have an account? Log In
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;

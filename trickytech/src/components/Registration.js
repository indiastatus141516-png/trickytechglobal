import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Registration.css';


const backendUrl = process.env.REACT_APP_BACKEND_URL;
const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});

  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!password2) {
      newErrors.password2 = 'Please confirm your password';
    } else if (password !== password2) {
      newErrors.password2 = 'Passwords do not match';
    }

    return newErrors;
  };

  const onSubmit = async e => {
    e.preventDefault();
    setErrors({});

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newUser = {
      name,
      email,
      password
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(newUser);

      const res = await axios.post({backendUrl}+'/api/users/register', body, config);
      console.log(res.data);
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        if (err.response.data.msg === 'User already exists') {
          setErrors({ email: 'Email already registered' });
        } else {
          setErrors({ general: err.response.data.msg });
        }
      } else {
        setErrors({ general: 'Registration failed' });
      }
    }
  }

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h2>Register</h2>
        {errors.general && <div className="error-message">{errors.general}</div>}
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={onChange} required />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={onChange} required />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={onChange} required />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password:</label>
            <input type="password" id="password2" name="password2" value={password2} onChange={onChange} required />
            {errors.password2 && <div className="error-message">{errors.password2}</div>}
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
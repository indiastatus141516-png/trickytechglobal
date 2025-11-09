import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        showProfileModal: false,
        error: null
    });

    const fetchUser = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/users/me');
            setAuthState(prev => ({
                ...prev,
                user: res.data.user,
                loading: false
            }));
        } catch (err) {
            // Invalid token, logout
            logout();
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['x-auth-token'] = token;
            fetchUser();
        } else {
            setAuthState({
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: null
            });
        }
    }, []);

    const login = async (email, password) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ email, password });

        try {
            const res = await axios.post('http://localhost:5000/api/users/login', body, config);
            localStorage.setItem('token', res.data.token);
            axios.defaults.headers.common['x-auth-token'] = res.data.token;
            // determine whether to show profile modal after login
            const showModal = !!(res.data.user && (res.data.user.isFirstLogin || !res.data.user.isProfileCompleted));
            setAuthState(prev => ({
                ...prev,
                isAuthenticated: true,
                loading: false,
                token: res.data.token,
                user: res.data.user,
                showProfileModal: showModal,
                error: null
            }));
        } catch (err) {
            let errorMessage = 'Login failed';
            if (err.response && err.response.data && err.response.data.msg) {
                errorMessage = err.response.data.msg;
            }
            setAuthState({
                ...authState,
                error: errorMessage
            });
            throw new Error(errorMessage);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['x-auth-token'];
        setAuthState({
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null,
            error: null
        });
    };

    const updateProfile = async (profileData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': authState.token
            }
        };

        const body = JSON.stringify({ profileData });

        try {
            const res = await axios.put('http://localhost:5000/api/users/profile/update', body, config);
            // update user and hide modal if profile is now completed
            setAuthState(prev => ({
                ...prev,
                user: res.data.user,
                showProfileModal: !(res.data.user && res.data.user.isProfileCompleted) // keep modal open if still incomplete
            }));
            return res.data;
        } catch (err) {
            throw err;
        }
    };

    const signAgreement = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': authState.token
            }
        };

        try {
            const res = await axios.post('http://localhost:5000/api/users/agreement/sign', {}, config);
            setAuthState(prev => ({
                ...prev,
                user: res.data.user
            }));
            return res.data;
        } catch (err) {
            throw err;
        }
    };

    const setShowProfileModal = (val) => {
        setAuthState(prev => ({ ...prev, showProfileModal: !!val }));
    };

    const setError = (errorMessage) => {
        setAuthState(prev => ({ ...prev, error: errorMessage }));
    };

    const clearError = () => {
        setAuthState(prev => ({ ...prev, error: null }));
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout, updateProfile, signAgreement, setError, clearError, setShowProfileModal }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

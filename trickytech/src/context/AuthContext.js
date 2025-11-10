import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

// ✅ get backend URL from ENV (Vercel will use process.env.REACT_APP_API_URL)
const API_BASE_URL = process.env.REACT_APP_API_URL ;

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        showProfileModal: false,
        error: null
    });

    const logout = useCallback(() => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['x-auth-token'];
        setAuthState({
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null,
            error: null
        });
    }, []);

    const fetchUser = useCallback(async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/users/me`);
            setAuthState(prev => ({
                ...prev,
                user: res.data.user,
                loading: false
            }));
        } catch (err) {
            logout(); // ✅ safe, logout is dependency now
        }
    }, [logout]);


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
    }, [fetchUser]);

    const login = async (email, password) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ email, password });

        try {
            const res = await axios.post(`${API_BASE_URL}/api/users/login`, body, config);

            localStorage.setItem('token', res.data.token);
            axios.defaults.headers.common['x-auth-token'] = res.data.token;

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
            setAuthState(prev => ({
                ...prev,
                error: err.response?.data?.msg || "Login failed"
            }));
            throw err;
        }
    };

    const updateProfile = async (profileData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': authState.token
            }
        };

        const body = JSON.stringify({ profileData });

        const res = await axios.put(`${API_BASE_URL}/api/users/profile/update`, body, config);
        setAuthState(prev => ({
            ...prev,
            user: res.data.user,
            showProfileModal: !(res.data.user && res.data.user.isProfileCompleted)
        }));

        return res.data;
    };

    const signAgreement = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': authState.token
            }
        };

        const res = await axios.post(`${API_BASE_URL}/api/users/agreement/sign`, {}, config);
        setAuthState(prev => ({
            ...prev,
            user: res.data.user
        }));
        return res.data;
    };

    const setShowProfileModal = (val) =>
        setAuthState(prev => ({ ...prev, showProfileModal: !!val }));

    const setError = (errorMessage) =>
        setAuthState(prev => ({ ...prev, error: errorMessage }));

    const clearError = () =>
        setAuthState(prev => ({ ...prev, error: null }));

    return (
        <AuthContext.Provider
            value={{ authState, login, logout, updateProfile, signAgreement, setError, clearError, setShowProfileModal }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

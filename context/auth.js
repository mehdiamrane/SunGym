import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

//api here is an axios instance
import api from 'helpers/api';

// Create context
export const AuthContext = createContext({});

// Auth provider with login and logout inside
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ token: null, user: null });

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = Cookies.get('auth-token');
      if (token) {
        const tokenRes = await api.post('users/tokenisvalid', null, {
          headers: { 'x-auth-token': token },
        });
        if (tokenRes.data) {
          const userRes = await api.get('users', {
            headers: { 'x-auth-token': token },
          });
          setUserData({ token: token, user: userRes.data });
        }
      }
    };
    checkLoggedIn();
  }, []);

  return <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>;
};

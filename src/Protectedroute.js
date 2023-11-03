import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Dashboard from './screens/Dashboard';

function ProtectedRoute() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuthentication() {
      try {
        const token = await localStorage.getItem('token');
        const response = await axios.post("https://quauntum-it-backend.onrender.com/check_authentication", { token });
        setAuthenticated(response.data.success);
      } catch (error) {
        console.error(error);
      }
    }
    
    checkAuthentication();
  }, []);

  return authenticated ? <Dashboard/> : <Registration />;
}

export default ProtectedRoute;

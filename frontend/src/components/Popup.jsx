import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Popup = ({ close }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname === '/dashboard';

  const handleLogout = async () => {
    await logout();
    close();
    navigate('/login');
  };

  const handleNavigate = () => {
    close();
    navigate(isDashboard ? '/' : '/dashboard');
  };

  return (
    <div className='absolute top-12 right-0 bg-white shadow-md rounded-md p-3 w-40'>
      <p
        className='cursor-pointer hover:bg-gray-100 p-1'
        onClick={handleNavigate}
      >
        {isDashboard ? 'Home' : 'Dashboard'}
      </p>

      <p
        className='text-red-500 cursor-pointer hover:bg-gray-100 p-1'
        onClick={handleLogout}
      >
        Logout
      </p>
    </div>
  );
};

export default Popup;

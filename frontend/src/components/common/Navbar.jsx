import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <span>Hospital Management System</span>
      {user && (
        <span>
          {user.name} ({user.role}) <button onClick={logout}>Logout</button>
        </span>
      )}
    </nav>
  );
}

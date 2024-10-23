// src/components/layout/NavLink.jsx
import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`px-4 py-2 rounded-md transition-all duration-200 ${
        isActive 
          ? 'bg-blue-600 text-white font-medium' 
          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  );
}
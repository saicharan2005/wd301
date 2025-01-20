import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData) : null;

  if (!user) {
    // If no user data is found, redirect to sign-in page
    navigate('/signin');
    return null; // Prevent rendering of the dashboard while redirecting
  }

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();

    // Redirect to signin page
    navigate('/signin');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      

      <div className="text-center">
        <p className="text-lg text-gray-700">
        <strong>{user.name}</strong>!
        </p>
        <p className="text-lg text-gray-700">Email: {user.email}</p>
        {/* Logout Link */}
        <a
            href="#"
            id="logout-link"
            onClick={handleLogout} // Call the logout function on click
            className="mt-6 text-red-500 hover:text-red-600 font-semibold"
          >
            Logout</a>
      </div>
    </div>
  );
}

export default Dashboard;
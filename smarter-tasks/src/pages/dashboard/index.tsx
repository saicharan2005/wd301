import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();


  const userData = JSON.parse(localStorage.getItem('userData'));
  if (!userData.name || !userData.email) {
    return <p>No user logged in.</p>;
  }

    console.log(userData.id); // "1"
    console.log(userData.name); // "Avishek Jana"
    console.log(userData.email); // "avishek@example.com"

   const handleLogout = () => {
      // Clear localStorage and redirect to sign-in
      localStorage.removeItem('userData');
      navigate('/signin');
    };

  return (
    <div className="min-h-screen  items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{userData.id}</h1>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{userData.name}</h1>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{userData.email}</h1>
      
      <button type="submit"  onClick={handleLogout}  className="w-100 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign out</button>
 
    </div>
 ); 
 
}

export default Dashboard;
import React, { useState } from 'react';

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Confirm password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password again"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Position</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your situation "
            />
          </div>
          <div className="mb-4 flex items-center">
            <input 
              type="checkbox" 
              className="mr-2"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <span className="text-gray-600 text-sm">I agree to the terms and conditions</span> 
             <a href="/login" className=' text-sm text-red-500'><span>return</span></a>
          </div>
          <button 
            type="submit" 
            className={`w-full py-2 rounded-lg transition ${isChecked ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
            disabled={!isChecked}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

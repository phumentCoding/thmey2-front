import React, { useState } from "react";

const Login = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-600 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              
             
            />
          </div>
          {/* Password Field */}
          <div>
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500">
          Don't have an account? <a href="/register" className="text-blue-600">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

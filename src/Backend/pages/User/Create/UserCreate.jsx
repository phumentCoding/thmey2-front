import React, { useState } from 'react';

const UserCreate = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-md">
      <div className=" flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create User</h2>
        <a href="/admin/user/list" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500">
              Back to User List
        </a>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
          <input
            type="number"
            name="phone"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Role</label>
          <select
            name="role"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="User">User</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-[200px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default UserCreate;

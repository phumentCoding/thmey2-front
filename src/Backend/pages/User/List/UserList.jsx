import React, { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";

const UserList = () => {
  const users = [
    { id: 1, name: "John Doe", image: "https://via.placeholder.com/150", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", image: "https://via.placeholder.com/150", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Michael Brown", image: "https://via.placeholder.com/150", email: "michael@example.com", role: "User" },
  ];

  const usersPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(startIndex, startIndex + usersPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">User List</h2>
        <a href="/admin/user/create" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
          <PlusIcon className="h-5 w-5 mr-2" /> Add New User
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              <th className="px-4 py-3 border dark:border-gray-600">ID</th>
              <th className="px-4 py-3 border dark:border-gray-600">Name</th>
              <th className="px-4 py-3 border dark:border-gray-600">Image</th>
              <th className="px-4 py-3 border dark:border-gray-600">Email</th>
              <th className="px-4 py-3 border dark:border-gray-600">Role</th>
              <th className="px-4 py-3 border dark:border-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                <td className="px-4 py-3 border text-center dark:border-gray-600">{user.id}</td>
                <td className="px-4 py-3 border dark:border-gray-600">{user.name}</td>
                <td className="px-4 py-3 border text-center dark:border-gray-600">
                  <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                </td>
                <td className="px-4 py-3 border dark:border-gray-600">{user.email}</td>
                <td className="px-4 py-3 border text-center dark:border-gray-600">{user.role}</td>
                <td className="px-4 py-3 border text-center flex justify-center space-x-2 dark:border-gray-600">
                  <a href='/admin/user/edit' className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                    <PencilIcon className="h-5 w-5" />
                  </a>
                  <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 disabled:opacity-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-white">{currentPage} / {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 disabled:opacity-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;

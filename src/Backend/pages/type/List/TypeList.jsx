import React, { useState } from 'react';

const TypeList = () => {
  const types = [
    { id: 1, name: 'Basic', category_id: 101, user_id: 1, status: 'Active', description: 'Basic subscription plan' },
    { id: 2, name: 'Premium', category_id: 102, user_id: 2, status: 'Inactive', description: 'Premium subscription with extra features' },
    { id: 3, name: 'Enterprise', category_id: 103, user_id: 3, status: 'Active', description: 'Enterprise-level plan with full support' },
    { id: 4, name: 'Startup', category_id: 104, user_id: 4, status: 'Active', description: 'Best for startups and small businesses' },
    { id: 5, name: 'Corporate', category_id: 105, user_id: 5, status: 'Inactive', description: 'Corporate plan with dedicated support' },
    // Add more items as needed...
  ];

  const itemsPerPage = 2; // Change this value based on how many items per page you want
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTypes = types.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(types.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Type List</h2>
        <a href="/admin/type/create" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Add Type
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category ID</th>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentTypes.map((type) => (
              <tr key={type.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{type.id}</td>
                <td className="px-4 py-2 border">{type.name}</td>
                <td className="px-4 py-2 border text-center">{type.category_id}</td>
                <td className="px-4 py-2 border text-center">{type.user_id}</td>
                <td className={`px-4 py-2 border text-center ${type.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                  {type.status}
                </td>
                <td className="px-4 py-2 border text-center">
                  <a href='/admin/type/edit' className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mr-2">
                    Edit
                  </a>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-700 transition-all"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="mx-2 text-lg text-white">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TypeList;

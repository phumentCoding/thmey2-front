import React, { useState } from "react";

const List = () => {
  // Dummy data for the table
  const data = [
    { id: 1, title: "Product A", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s", sortDsc: "Short description A", categoriesId: 101, userId: 1, typeId: 201, description: "Detailed description A" },
    { id: 2, title: "Product B", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s", sortDsc: "Short description B", categoriesId: 102, userId: 2, typeId: 202, description: "Detailed description B" },
    { id: 3, title: "Product C", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s", sortDsc: "Short description C", categoriesId: 103, userId: 3, typeId: 203, description: "Detailed description C" },
    { id: 4, title: "Product D", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s", sortDsc: "Short description D", categoriesId: 104, userId: 4, typeId: 204, description: "Detailed description D" },
    { id: 5, title: "Product E", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s", sortDsc: "Short description E", categoriesId: 105, userId: 5, typeId: 205, description: "Detailed description E" },
    { id: 6, title: "Product A", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s", sortDsc: "Short description A", categoriesId: 101, userId: 1, typeId: 201, description: "Detailed description A" },
    { id: 7, title: "Product B", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s", sortDsc: "Short description B", categoriesId: 102, userId: 2, typeId: 202, description: "Detailed description B" },
    { id: 8, title: "Product C", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s", sortDsc: "Short description C", categoriesId: 103, userId: 3, typeId: 203, description: "Detailed description C" },
    { id: 9, title: "Product D", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s", sortDsc: "Short description D", categoriesId: 104, userId: 4, typeId: 204, description: "Detailed description D" },
    { id: 10, title: "Product E", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s", sortDsc: "Short description E", categoriesId: 105, userId: 5, typeId: 205, description: "Detailed description E" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [bgColor, setBgColor] = useState('linear-gradient(to right, #4e73df, #1cc88a)');
  const itemsPerPage = 5;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const changeBackground = (newColor) => {
    setBgColor(newColor);
  };

  return (
    <div className="p-6" style={{ background: bgColor, transition: 'background 0.5s ease' }}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Item List</h2>
        <a href="/admin/news/create" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Add New Product
        </a>
      </div>

      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">Short Description</th>
            <th className="px-4 py-2 border">Categories ID</th>
            <th className="px-4 py-2 border">User ID</th>
            <th className="px-4 py-2 border">Type ID</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800">
          {currentItems.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="px-4 py-2 border">{item.id}</td>
              <td className="px-4 py-2 border">{item.title}</td>
              <td className="px-4 py-2 border">
                <img src={item.image} alt="" className="w-12 h-12 rounded-full object-cover" />
              </td>
              <td className="px-4 py-2 border">{item.sortDsc}</td>
              <td className="px-4 py-2 border">{item.categoriesId}</td>
              <td className="px-4 py-2 border">{item.userId}</td>
              <td className="px-4 py-2 border">{item.typeId}</td>
              <td className="px-4 py-2 border">{item.description}</td>
              <td className="px-4 py-2 border flex space-x-2">
                <a 
                  href="/admin/news/edit" 
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded hover:bg-gradient-to-l hover:from-pink-600 hover:to-red-600 transition-all duration-300"
                  onClick={() => changeBackground('linear-gradient(to right, #ff7f7f, #ff3d3d)')}
                >
                  Edit
                </a>
                <button 
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded hover:bg-gradient-to-l hover:from-yellow-600 hover:to-red-600 transition-all duration-300"
                  onClick={() => changeBackground('linear-gradient(to right, #ff9a8b, #ff6a88)')}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-500"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-500"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default List;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../stores/categorySlice";
import { FaPlus, FaEdit, FaTrash, FaSpinner } from "react-icons/fa";

const ListCategory = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.category);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  useEffect(() => {
    console.log("Categories:", categories);
    console.log("Status:", status);
    console.log("Error:", error);
  }, [categories, status, error]);

  const handleDelete = (id) => {
    console.log(`Delete category with ID: ${id}`);
    // Add delete logic here if implemented in Redux (e.g., dispatch(deleteCategory(id)))
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-64">
        <FaSpinner className="animate-spin text-4xl text-yellow-500 dark:text-yellow-400" />
        <span className="ml-2 text-gray-600 dark:text-gray-300">Loading categories...</span>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center text-red-500 dark:text-red-400 p-6">
        Error: {error || "Something went wrong"}
      </div>
    );
  }

  return (
    <div className="max-full mx-auto mt-6 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Category List</h2>
        <a
          href="/admin/category/create"
          className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-700 transition duration-200"
        >
          <FaPlus className="mr-2" />
          Add Category
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-200">
              <th className="p-3 text-left font-semibold">N.O</th>
              <th className="p-3 text-left font-semibold">ID</th>
              <th className="p-3 text-left font-semibold">Name</th>
              <th className="p-3 text-left font-semibold">Created By</th>
              <th className="p-3 text-left font-semibold">Status</th>
              <th className="p-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((category,index) => (
                <tr
                  key={category.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-150"
                >
                  <td className="p-3 text-gray-600 dark:text-gray-300">{index + 1}</td>
                  <td className="p-3 text-gray-600 dark:text-gray-300">{category.id}</td>
                  <td className="p-3 text-gray-800 dark:text-white font-medium">{category.name}</td>
                  <td className="p-3 text-gray-600 dark:text-gray-300">{category.user.name}</td>
                  <td
                    className={`p-3 font-semibold ${
                      category.status === "active" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {category.status}
                  </td>
                  <td className="p-3 space-x-3">
                    <a
                      href={`/admin/category/edit/${category.id}`}
                      className="inline-flex items-center bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-700 transition duration-200"
                    >
                      <FaEdit className="mr-1" />
                      Edit
                    </a>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="inline-flex items-center bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 dark:hover:bg-red-700 transition duration-200"
                    >
                      <FaTrash className="mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500 dark:text-gray-400">
                  No categories available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCategory;
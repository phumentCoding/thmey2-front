import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { createCategory } from "../../../stores/categorySlice";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("active");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status: apiStatus, error } = useSelector((state) => state.category);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category.trim()) return;

    const newCategory = {
      name: category.trim(),
      status,
    };

    dispatch(createCategory(newCategory))
      .unwrap()
      .then(() => {
        setCategory("");
        setStatus("active");
        navigate("/admin/category"); // Redirect after success
      })
      .catch((error) => console.error("Error creating category:", error));
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Add Category
          </h2>
          <Link
            to="/admin/category"
            className="text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md transition"
          >
            Back
          </Link>
        </div>

        {error && <p className="text-red-500 text-sm mb-3 p-2 bg-red-100 rounded">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Enter category name"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-[200px] bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={apiStatus === "loading"}
          >
            {apiStatus === "loading" ? "Adding..." : "Add Category"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getCategoryById, updateCategory } from '../../../stores/categorySlice';

const EditCategory = () => {
  const { id } = useParams(); // Get category ID from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedCategory, selectedStatus, selectedError, status: apiStatus, error } = useSelector(
    (state) => state.category
  );

  // Initialize form state with empty values
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('active');

  // Fetch category when component mounts
  useEffect(() => {
    dispatch(getCategoryById(id));
  }, [dispatch, id]);

  // Populate form when selectedCategory is loaded
  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory.name || '');
      setStatus(selectedCategory.status || 'active');
      console.log(selectedCategory.name)
    }
  }, [selectedCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category.trim()) return;

    const updatedCategory = {
      id,
      name: category.trim(),
      status,
    };

    dispatch(updateCategory(updatedCategory))
      .unwrap()
      .then(() => {
        navigate('/admin/category'); // Redirect after success
      })
      .catch((err) => console.error('Error updating category:', err));
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Edit Category
          </h2>
          <Link
            to="/admin/category"
            className="text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md transition"
          >
            Back
          </Link>
        </div>

        {selectedStatus === 'loading' && <p className="text-blue-500">Loading category...</p>}
        {selectedError && (
          <p className="text-red-500 text-sm mb-3 p-2 bg-red-100 rounded">{selectedError}</p>
        )}
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
            disabled={apiStatus === 'loading' || selectedStatus === 'loading'}
          >
            {apiStatus === 'loading' ? 'Updating...' : 'Update Category'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
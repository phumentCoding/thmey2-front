import React, { useState } from "react";

const Create = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 dark:bg-gradient-to-r dark:from-blue-800 dark:via-pink-700 dark:to-purple-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
          New Create
        </h2>

        <form>
          {/* Title Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Sort-Dsc Field */}
          <div className="mb-4">
            <label
              htmlFor="sort-dsc"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Sort-Dsc
            </label>
            <input
              type="text"
              id="sort-dsc"
              name="sort-dsc"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Category ID Field */}
          <div className="mb-4">
            <label
              htmlFor="category_id"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Category ID
            </label>
            <input
              type="text"
              id="category_id"
              name="category_id"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* User ID Field */}
          <div className="mb-4">
            <label
              htmlFor="user_id"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              User ID
            </label>
            <input
              type="text"
              id="user_id"
              name="user_id"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Type ID Field */}
          <div className="mb-4">
            <label
              htmlFor="type_id"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Type ID
            </label>
            <input
              type="text"
              id="type_id"
              name="type_id"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Image Field */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-control mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={2}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-4">
            <a
              href="/admin/news/list"
              className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Back
            </a>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

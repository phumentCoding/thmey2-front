import api from "./api";

const category = {
  getAllCategory: () => api.get("/category"),
  getCategoryById: (id) => api.get(`/category/${id}`),
  createCategory: (data) => api.post("/category", data),
  updateCategory: (id, data) => api.post(`/category/${id}`, data),
  deleteCategory: (id) => api.delete(`/category/${id}`),
  searchCategory: (query) => api.get(`/category/search?q=${query}`),
};

export default category;
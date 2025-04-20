import api from "./axiosClient";

const newsApi = {
  getAllNews: () => api.get("/news"),
  getNewsById: (id) => api.get(`/news/${id}`),
  createNews: (data) => api.post("/news", data),
  updateNews: (id, data) => api.post(`/news/${id}`, data),
  deleteNews: (id) => api.delete(`/news/${id}`),
  searchNews: (query) => api.get(`/news/search?q=${query}`),
};

export default newsApi;

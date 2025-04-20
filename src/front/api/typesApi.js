import api from "./axiosClient";

const typeApi = {
  getAllType: () => api.get("/type"),
  getTypeById: (id) => api.get(`/type/${id}`),
  createType: (data) => api.post("/type", data),
  updateType: (id, data) => api.post(`/type/${id}`, data),
  deleteType: (id) => api.delete(`/type/${id}`),
  searchType: (query) => api.get(`/type/search?q=${query}`),
};

export default typeApi;

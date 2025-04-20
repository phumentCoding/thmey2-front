import api from "./api";

const user = {
  getAllUser: () => api.get("/user"),
  getUserById: (id) => api.get(`/user/${id}`),
  createUser: (data) => api.post("/user", data),
  updateUser: (id, data) => api.post(`/user/${id}`, data),
  deleteUser: (id) => api.delete(`/user/${id}`),
  searchUser: (query) => api.get(`/user/search?q=${query}`),
};

export default user;
import api from "./axiosClient";

const userApi = {
  getAllUsers: () => api.get("/users"),
  getUserById: (id) => api.get(`/users/${id}`),
  updateUser: (id, data) =>api.post(`/users/${id}`, data),
  deleteUser: (id) => api.delete(`/users/${id}`),
};

export default userApi;

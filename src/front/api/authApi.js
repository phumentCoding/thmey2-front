import api from "./axiosClient";

const authApi = {
  register: (data) => api.post("/register", data),
  login: (data) => api.post("/login", data),
  logout: () => api.post("/logout"),
  getUser: () => api.get("/user"), // Get logged-in user details
};

export default authApi;

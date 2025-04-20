import api from "./api";

const auth = {
  register: (data) => api.post("/register", data),
  login: (data) => api.post("/login", data),
  logout: () => api.post("/logout"),
  getUser: () => api.get("/user"), // Get logged-in user details
};

export default auth;

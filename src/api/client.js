import axios from "axios";

const response = async (response) => response;
const config = {
  headers: {
    Authorization: localStorage.getItem("Authorization"),
  },
};
const requests = {
  get: (url) =>
    response(
      axios.get(url, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
    ),
  put: (url, data) =>
    response(
      axios.put(url, data, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
    ),
  post: (url, data) =>
    response(
      axios.post(url, data, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
    ),
  delete: (url) =>
    response(
      axios.delete(url, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
    ),
};

const user = {
  logIn: ({ username, password }) =>
    requests.post("http://localhost:8081/api/v1/auth/authenticate", {
      username,
      password,
    }),
  create: (data) => requests.post("http://localhost:8081/api/v1/auth", data),
  getAll: (filter) =>
    requests.get("http://localhost:8081/api/v1/auth/?" + filter),
  search: (search, filter) =>
    requests.get(
      "http://localhost:8081/api/v1/auth/search?query=" + search + "&" + filter
    ),
  delete: (id) =>
    requests.delete("http://localhost:8081/api/v1/auth?userId=" + id),
};

const profile = {
  get: (userId) =>
    requests.get(`http://localhost:8081/api/v1/profile/${userId}`),
};

export { user, profile };

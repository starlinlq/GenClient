import axios from "axios";

const response = async (response) => response;

const requests = {
  get: (url) => response(axios.get(url)),
  put: (url, data) => response(axios.put(url, data)),
  post: (url, data) =>
    response(
      axios.post(url, data, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      })
    ),
  delete: (url) => response(axios.delete(url)),
};

const user = {
  logIn: ({ username, password }) =>
    requests.post("http://localhost:8081/api/v1/auth/authenticate", {
      username,
      password,
    }),
  create: (data) => requests.post("http://localhost:8081/api/v1/auth", data),
};

const profile = {};
export { user, profile };

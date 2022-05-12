import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "flowbite";
import { AuthProvider } from "./store/AuthContext";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("acces");
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

axios.interceptors.request.use(
  (request) => {
    //console.log(request);
    // Edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // console.log(response);
    // Edit response config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);

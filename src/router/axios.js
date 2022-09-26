import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

axios.defaults.timeout = 15000;
axios.defaults.crossDomain = true;

axios.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

axios.interceptors.response.use(
  (res) => {
    NProgress.done();
    return res;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

export default axios;

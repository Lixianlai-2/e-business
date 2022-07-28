import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";

// 创造一个axios实例
const requests = axios.create({
  baseURL: "/mock",
  // 响应时间限制
  timeout: 5000,
});

// 请求拦截器，在请求发送之前，它可以检测到请求，提前做一些事情
requests.interceptors.request.use((config) => {
  nProgress.start();
  // 配置对象，里面有一个属性很重要，headers请求头
  return config;
});

// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    nProgress.done();
    // 响应成功
    return res.data;
  },
  (error) => {
    // 响应失败

    return Promise.reject(new Error(error));
  }
);

export default requests;

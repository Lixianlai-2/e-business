// 引入重新封装后的axios
import request from "./request";

const reqCategoryList = () => {
  // 三级联动接口
  // 因为axios发送请求后，返回的是Promise对象，所以需要将其返回
  return request({ url: "/product/getBaseCategoryList", methods: "get" });
};

export default reqCategoryList;

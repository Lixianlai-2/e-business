// 引入重新封装后的axios
import request from "./request";
// 引入针对mock数据重新封装的axios
import mockRequest from "./mockRequest";

export const reqCategoryList = () => {
  // 三级联动接口
  // 因为axios发送请求后，返回的是Promise对象，所以需要将其返回
  return request({ url: "/product/getBaseCategoryList", methods: "get" });
};

export const reqBannerList = () => {
  // 因为axios发送请求后，返回的是Promise对象，所以需要将其返回
  return mockRequest({ url: "/banner", methods: "get" });
};

export const reqFloorList = () => {
  return mockRequest({ url: "/floor", methods: "get" });
};

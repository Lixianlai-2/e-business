import Mock from "mockjs";
// JSON数据默认暴露，可以直接引入
import banner from "./banner.json";
import floor from "./floor.json";

// 选择对什么数据进行模拟，指定模仿成功的状态码为200，数据为引入的JSON文件
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });

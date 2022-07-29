import { reqCategoryList, reqBannerList, reqFloorList } from "@/API";

const home = {
  namespaced: true,
  state: {
    // 根据接口返回初始化
    categoryList: [],
    bannerList: [],
    floorList: [],
  },
  mutations: {
    CATEGORYLIST(state, serverCategoryList) {
      state.categoryList = serverCategoryList;
    },
    GETBANNERLIST(state, mockBannerList) {
      state.bannerList = mockBannerList;
    },
    GETFLOORLIST(state, mockFloorList) {
      state.floorList = mockFloorList;
      console.log(`!!!`, state.floorList);
    },
  },
  actions: {
    // 发送异步请求，获取服务器中的数据
    async categoryList(context) {
      let result = await reqCategoryList();
      console.log("这里有运行嘛");
      if (result.code === 200) {
        context.commit("CATEGORYLIST", result.data);
      }
    },
    async getBannerList(context) {
      let result = await reqBannerList();
      context.commit("GETBANNERLIST", result.data);
    },

    async getFloorList(context) {
      let result = await reqFloorList();
      console.log(`result@@@`, result);
      if (result.code === 200) {
        context.commit("GETFLOORLIST", result.data);
      }
    },
  },
  getters: {},
};

export default home;

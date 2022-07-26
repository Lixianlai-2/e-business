import reqCategoryList from "@/API";

const home = {
  namespaced: true,
  state: {
    // 根据接口返回初始化
    categoryList: [],
  },
  mutations: {
    CATEGORYLIST(state, serverCategoryList) {
      state.categoryList = serverCategoryList;
      console.log(serverCategoryList);
    },
  },
  actions: {
    // 发送异步请求，获取服务器中的数据
    async categoryList(context) {
      let result = await reqCategoryList();
      console.log(result);
      if (result.code === 200) {
        context.commit("CATEGORYLIST", result.data);
      }
    },
  },
  getters: {},
};

export default home;

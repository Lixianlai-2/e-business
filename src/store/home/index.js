import reqCategoryList from "@/API";

const state = {
  categoryList: [],
};
const mutations = {
  CATEGORYLIST(state, serverCategoryList) {
    state.categoryList = serverCategoryList;
  },
};
const actions = {
  async categoryList() {
    let result = await reqCategoryList();
    console.log(result);
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};

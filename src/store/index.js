// 引入 Vuex 和 Vue
import { createStore } from 'vuex';
import basicModule from './modules/basicModule'




// 定义状态对象
const state = {
};

// 定义 getters 对象
const getters = {
};

// 定义 actions 对象
const actions = {
  async fetchApiData() {
    try {
      const response = await fetch('https://run.mocky.io/v3/d7a29aba-9aac-4a97-b1b7-7b3d87ae8b7e');
      const data = await response.json();

      // commit('setApiData', data);
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching API data:', error);
      // throw error;
    }
  },
};


// 定义 mutations 对象
const mutations = {
};

// 创建 Vuex store 实例
export default createStore({
  state,
  getters,
  actions,
  mutations,
  modules: {
    basicModule: basicModule,
  },
});

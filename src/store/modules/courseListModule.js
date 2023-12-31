
// 定义状态对象
const state = {
  cartItems: []
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
  addToCart({ commit, state, dispatch }, courseInform) {
    const itemIndex = state.cartItems.findIndex((item) => item.id === courseInform.id);
    if (itemIndex !== -1) {
      console.log(itemIndex)
      commit('INCREMENT_CART_ITEM_QUANTITY', itemIndex);
    } else {
      commit('ADD_CART_ITEM', courseInform);
    }
    dispatch('setCartItemsToLocalStorage');
  },
  clearCartItem({ commit, dispatch }) {
    commit('SET_CART_ITEM_DATA', []);
    dispatch('setCartItemsToLocalStorage');
  },
  setCartItemsToLocalStorage({ dispatch }) {
    const payload = { name: 'cartItems', data: JSON.stringify(state.cartItems) };
    dispatch('setToLocalStorage', payload);
  },
  getCartItemFromLocalStorage({ commit, dispatch }) {
    dispatch('getLocalStorage', { name: 'cartItems' }).then(data => {
      commit('SET_CART_ITEM_DATA', data);
    });
  },
  removeCartItem({ commit, state, dispatch }, itemId) {
    const index = state.cartItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
      commit('REMOVE_CART_ITEM', index);
      dispatch('setCartItemsToLocalStorage');
    }
  },
};


// 定义 mutations 对象
const mutations = {
  ADD_CART_ITEM(state, product) {
    let productWithQuantity = {
      ...product,
      quantity: 1
    };
    state.cartItems.push(productWithQuantity);
  },
  INCREMENT_CART_ITEM_QUANTITY(state, itemIndex) {
    state.cartItems[itemIndex].quantity++;
  },
  SET_CART_ITEM_DATA(state, data) {
    state.cartItems = [...data];
  },
  REMOVE_CART_ITEM(state, index) {
    state.cartItems.splice(index, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}

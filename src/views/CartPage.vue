<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">購物車</h1>
    <div v-if="cartItems.length === 0"
      class="text-center">
      <p>購物車中沒有商品</p>
    </div>

    <div v-else>
      <div v-for="item in cartItems"
        :key="item.id"
        class="flex items-center border p-4 mb-4">
        <input type="checkbox"
          v-model="item.selected"
          :value="item.id"
          class="mr-2">
        <img :src="item.picture"
          :alt="item.title"
          class="w-16 h-16 object-cover mr-4 mb-2 sm:mb-0 sm:mr-8">
        <div>
          <h2 class="text-lg font-bold">{{ item.title }}</h2>
          <p class="text-gray-500">單價: {{ item.price }}</p>
          <p class="text-gray-500">數量: {{ item.quantity }}</p>
        </div>
        <button @click="removeItem(item.id)"
          class="ml-auto text-red-500 hidden sm:block">
          刪除
        </button>
      </div>

      <div
        class="fixed bottom-0 left-0 right-0 bg-white sm:relative sm:flex sm:flex-wrap justify-between items-center border-t py-4 px-6 sm:py-2 sm:px-4">
        <div class="flex items-center flex-grow">
          <div>
            <button @click="selectAllItems"
              class="text-gray-500 hover:text-gray-700">全选</button>
          </div>
          <div class="ml-4">
            <button @click="removeSelectedItems"
              class="text-red-500 hover:text-red-700">刪除</button>
          </div>
        </div>
        <div class="flex sm:justify-between">

          <p class="text-lg mt-1 mr-1">總計金額: {{ calculateTotalPrice() }} 元</p>
          <div class="mx-auto"></div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="checkout">確認結帳</button>
        </div>
      </div>
    </div>
  </div>

  <div v-show="showModal"
    class="fixed inset-0 flex items-center justify-center">
    <div class="modal-overlay bg-black opacity-50"></div>
    <div class="modal-container bg-white w-64 p-4 rounded shadow">
      <!-- 模态框的内容 -->
      <h2 class="text-lg font-bold mb-4">确认购物车</h2>
      <p class="text-gray-700 mb-4">是否确定提交订单？</p>
      <!-- 其他内容 -->
      <div class="flex justify-end">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          @click="submitOrder">
          确认提交
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          @click="closeModal">
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItems: [], // 存储选中的商品项的 ID
      showModal: false, // 控制模态框的显示与隐藏

    };
  },
  created() {
    this.$store.dispatch('getCartItemFromLocalStorage')
  },
  computed: {
    cartItems() {
      return this.$store.state.classListModule.cartItems;
    },
  },

  methods: {
    removeItem(itemId) {
      this.$store.dispatch('removeCartItem', itemId);
    },

    calculateTotalPrice() {
      let totalPrice = 0;

      for (const item of this.cartItems) {
        totalPrice += item.price * item.quantity;
      }

      return totalPrice;
    },
    removeSelectedItems() {
      const selectedItems = this.cartItems.filter(item => item.selected);

      for (const item of selectedItems) {
        this.$store.dispatch('removeCartItem', item.id);
      }
    },
    selectAllItems() {
      // 设置购物车中所有商品的选中状态为 true
      for (const item of this.cartItems) {
        item.selected = true;
      }
    },
    checkout() {
      this.showModal = true; // 打开模态框
      // 在这里可以进行其他购物车确认操作，例如提交订单等
    },
    submitOrder() {
      this.showModal = false;
      this.$store.dispatch('clearCartItem');
    },
    closeModal() {
      this.showModal = false; // 关闭模态框
    },
  },
};
</script>

<style></style>

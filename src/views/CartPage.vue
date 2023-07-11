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
          v-model="selectedItems"
          :value="item.id"
          class="mr-2">
        <img :src="item.picture"
          :alt="item.title"
          class="w-16 h-16 object-cover mr-4">
        <div>
          <h2 class="text-lg font-bold">{{ item.title }}</h2>
          <p class="text-gray-500">單價: {{ item.price }}</p>
          <p class="text-gray-500">數量: {{ item.quantity }}</p>
        </div>
        <button @click="removeItem(item.id)"
          class="ml-auto text-red-500">
          刪除
        </button>
      </div>

      <div class="flex justify-between items-center border-t pt-4 mt-4">
        <div>
          <button @click="removeSelectedItems"
            class="text-red-500">
            多選刪除
          </button>
        </div>
        <p class="text-lg">總計金額: {{ calculateTotalPrice() }} 元</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="checkout">
          確認
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

    checkout() {
      // 確認購物車，例如提交訂單等操作
    },
    removeSelectedItems() {
      for (const itemId of this.selectedItems) {
        this.$store.dispatch('removeCartItem', itemId);
      }
      this.selectedItems = []; // 清空选中的商品项
    },
  },
};
</script>

<style>
/* 根据需求添加自定义样式 */
</style>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">購物車</h1>
    <div v-if="cartItems.length === 0"
      class="text-center">
      <p>購物車中沒有商品</p>
    </div>
    <div v-else>
      <CartItem v-for="item in cartItems"
        :key="item.id"
        :item="item"
        @remove="removeItem(item.id)" />
      <CartFooter :totalPrice="calculateTotalPrice()"
        @removeSelected="removeSelectedItems"
        @checkout="checkout" />
    </div>
    <Modal :show="showModal"
      @close="closeModal">
      <h2 class="text-lg font-bold mb-4">确认购物车</h2>
      <p class="text-gray-700 mb-4">是否确定提交订单？</p>
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
    </Modal>
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem.vue';
import CartFooter from '@/components/cart/CartFooter.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    CartItem,
    CartFooter,
    Modal
  },
  data() {
    return {
      showModal: false
    };
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
      for (const item of this.cartItems) {
        item.selected = true;
      }
    },
    checkout() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitOrder() {
      this.showModal = false;
      this.$store.dispatch('clearCartItem');
    },
  },
};
</script>

<style></style>

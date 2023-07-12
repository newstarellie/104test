<template>
  <div
    class="fixed bottom-0 left-0 right-0 bg-white sm:relative sm:flex sm:flex-wrap justify-between items-center border-t py-4 px-6 sm:py-2 sm:px-4">
    <div class="flex items-center flex-grow">
      <!-- <div>
        <button @click="selectAllItems"
          class="text-gray-500 hover:text-gray-700">全選</button>
      </div> -->
      <div>
        <button @click="removeSelectedItems"
          class="text-red-500 hover:text-red-700">全部刪除</button>
      </div>
    </div>
    <div class="flex sm:justify-between">
      <p class="text-lg mt-1 mr-1">總計金額: {{ totalPrice }} 元</p>
      <div class="mx-auto"></div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="checkout">
        確認結帳
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['totalPrice'],
  methods: {
    removeSelectedItems() {
      this.$emit('removeSelected');
    },
    selectAllItems() {
      this.$emit('selectAllItems');
    },
    checkout() {
      this.$emit('checkout');
    },
  },
};
</script>

<style></style>

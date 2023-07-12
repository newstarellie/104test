<template>
  <div :class="['flex items-center border p-4 mb-4', { 'hidden sm:block': !isMobile }]">
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
    <button @click="$emit('remove')"
      class="ml-auto text-red-500 hidden sm:block">
      刪除
    </button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    isMobile() {
      // 根據您的需求，這裡可以添加檢測設備是移動設備還是桌面設備的邏輯
      // 例如使用window.innerWidth來判斷屏幕寬度
      return true; // 假設都是移動設備
    },
  },
};
</script>

<style></style>

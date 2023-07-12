<template>
  <div v-show="show"
    class="fixed inset-0 flex items-center justify-center">
    <div class="modal-overlay bg-black opacity-50"></div>
    <div class="modal-container bg-white w-64 p-4 rounded shadow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style></style>

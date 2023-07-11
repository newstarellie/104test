<template>
  <nav class="bg-gray-800">
    <ul class="flex items-center justify-center py-4">
      <li>
        <router-link to="/"
          class="text-white hover:text-gray-300 px-4">課程列表</router-link>
      </li>
      <li>
        <router-link to="/cartPage"
          class="text-white hover:text-gray-300 px-4">購物車</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
};
</script>


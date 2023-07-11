<template>
  <nav class="bg-gray-800">
    <div class="flex items-center justify-between py-4 px-4 ">
      <div>
        <h1 class="text-white text-lg font-bold">網站名稱</h1>
      </div>
      <div class="sm:hidden">
        <button @click="toggleMenu"
          class="text-white hover:text-gray-300">
          <img src="https://www.svgrepo.com/download/474242/menu-hamburger.svg"
            width="24"
            height="24"
            alt="Burger Menu">

        </button>
      </div>
      <ul class="hidden sm:flex items-center space-x-4">
        <li>
          <router-link to="/"
            class="text-white hover:text-gray-300 px-4">課程列表</router-link>
        </li>
        <li>
          <router-link to="/cartPage"
            class="text-white hover:text-gray-300 px-4">購物車</router-link>
        </li>
      </ul>
    </div>
    <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}"
      class="sm:hidden">
      <ul class="flex flex-col items-center space-y-4 py-2">
        <li>
          <router-link to="/"
            class="text-white hover:text-gray-300 px-4">課程列表</router-link>
        </li>
        <li>
          <router-link to="/cartPage"
            class="text-white hover:text-gray-300 px-4">購物車</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

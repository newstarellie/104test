<template>
  <div id="app"
    class="flex flex-col min-h-screen">
    <header class="bg-gray-800">
      <Navbar></Navbar>
    </header>
    <main class="flex-1">
      <router-view></router-view>
    </main>
    <footer class="bg-gray-800 py-4">
      <p class="text-center text-gray-300">&copy; 2023 My E-commerce Website. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
    this.$store.dispatch('setFireBase');
  },

}
</script>

<style lang="scss">
#app {
  background-color: $primary-color;
  height: 100%;
  display: flex;
  flex-direction: column;
}


main {
  flex: 1;
}

footer {
  flex-shrink: 0;
}
</style>

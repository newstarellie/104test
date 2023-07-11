<template>
  <h1>ClassListPage</h1>
</template>

<script>



export default {
  name: 'ClassListPage',
  components: {
    // ProductList,
  },
  created() {
    this.$store.dispatch('setFireBase');
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style scoped>
.home {
  text-align: center;
}

h1 {
  font-size: 2em;
  margin: 20px 0;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}
</style>

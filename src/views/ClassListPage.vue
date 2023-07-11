<template>
  <div>
    <h1>課程列表</h1>
    <div v-for="course in courses"
      :key="course.id"
      class="border p-4 mb-4">
      <h2 class="text-lg font-bold">{{ course.title }}</h2>
      <img :src="course.picture"
        alt="Course Thumbnail"
        class="w-64 h-64 object-cover mt-4 mb-2">
      <p class="font-bold">單價: {{ course.price }}</p>
      <button v-if="course.status !== '尚未開始'"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
        加入購物車
      </button>
      <button v-else
        class="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded mt-2"
        disabled>
        尚未開始
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const data = await this.$store.dispatch('fetchApiData');
        this.courses = data;
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    },
  },
};
</script>

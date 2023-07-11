<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">課程列表</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="course in courses"
        :key="course.id"
        class="border p-4 flex flex-col">
        <h2 class="text-lg font-bold mb-2">{{ course.title }}</h2>
        <img :src="course.picture"
          alt="Course Thumbnail"
          class="w-64 h-64 object-cover mb-2">
        <p class="font-bold mb-2">單價: {{ course.price }}</p>
        <div class="flex-grow"></div> <!-- 添加一个占位的空 div，使按钮位置固定在底部 -->
        <div class="mt-auto">
          <button v-if="course.status !== '尚未開始'"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            @click="addToCart(course)">
            加入購物車
          </button>
          <button v-else
            class="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded mt-2"
            disabled>
            尚未開始
          </button>
        </div>
      </div>
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
    addToCart(courseInform) {
      // this.$toast.success("加入成功");
      console.log(this.courseInform)
      return this.$store.dispatch('addToCart', courseInform);
    },
  },
};
</script>

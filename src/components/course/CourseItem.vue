<template>
  <div class="border p-4 flex flex-col">
    <img :src="course.picture"
      alt="Course Thumbnail"
      class="w-80 h-80 object-cover mx-auto">
    <h2 class="text-lg font-bold mb-2">{{ course.title }}</h2>

    <div class="flex justify-between items-center mt-auto">
      <p class="font-bold">單價: {{ course.price }}</p>
      <div class="mt-auto">
        <button v-if="course.status !== '尚未開始'"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          @click="addToCart(course)">加入購物車</button>
        <button v-else
          class="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded mt-2"
          disabled>尚未開始</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart(courseInform) {
      // this.$toast.success("加入成功");
      console.log(this.courseInform);
      return this.$store.dispatch('addToCart', courseInform);
    }
  }
};
</script>

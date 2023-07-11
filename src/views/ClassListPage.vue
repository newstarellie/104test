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
      courses: [
        {
          id: 2,
          title: "自由花藝體驗坊：希臘神話 X 花藝課程",
          status: "尚未開始",
          picture: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80",
          price: "1500"
        },
        {
          "id": 1,
          "title": "【手作烘焙坊 -【季節限定】玫瑰花檸檬塔",
          "status ": "報名當中",
          "picture": "https://images.unsplash.com/photo-1600856450294-92b3a7062a3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
          "price ": "1200"
        },
        // 可添加更多課程資料
      ]
    };
  }
};
</script>

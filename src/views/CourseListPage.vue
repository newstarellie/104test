<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">課程列表</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CourseItem v-for="course in courses"
        :key="course.id"
        :course="course" />
    </div>
  </div>
</template>

<script>
import CourseItem from '@/components/course/CourseItem.vue';

export default {
  components: {
    CourseItem
  },
  data() {
    return {
      courses: []
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
    }
  }
};
</script>

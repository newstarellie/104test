import { createRouter, createWebHistory } from 'vue-router';
import CourseListPage from '../views/CourseListPage.vue';
import CartPage from '../views/CartPage.vue';



const routes = [
  {
    path: '/',
    name: 'CourseListPage',
    component: CourseListPage,
  },
  {
    path: '/cartPage',
    name: 'CartPage',
    component: CartPage,
  },
];

// 創建 Vue Router 實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

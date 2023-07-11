import { createRouter, createWebHistory } from 'vue-router';
import ClassListPage from '../views/ClassListPage.vue';
import CartPage from '../views/CartPage.vue';



const routes = [
  {
    path: '/',
    name: 'ClassListPage',
    component: ClassListPage,
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

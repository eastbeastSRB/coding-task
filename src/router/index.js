import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserCard from '../components/UserCard.vue';
import RoleCreate from '../components/RoleCreate.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title: "Home"
      }
    },
    {
      path: '/role/:id',
      name: 'single-user',
      component: UserCard,
      meta:{
        title: "User"
      }
    },
    {
      path: '/add-role',
      name: 'create-role',
      component: RoleCreate,
      meta:{
        title: "Create role"
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// Add title to the tab
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router

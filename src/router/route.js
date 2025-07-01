import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import CreateTicket from '@/views/CreateTicket.vue';
import ViewTicket from '@/views/ViewTicket.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateTicket
    },
    {
      path: '/view/:index',
      name: 'view',
      component: ViewTicket,
      props: true
    }
  ],
})

export default router

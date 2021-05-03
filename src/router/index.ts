// import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
import TodoMain from '../components/todo/Main.vue';
// const TodoMain = defineAsyncComponent(
//   () => import("../components/todo/Main.vue")
// );

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoMain
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;

import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";
const Good = defineAsyncComponent(() => import("../components/Good.vue"));

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Hello",
    component: HelloWorld,
  },
  {
    path: "/good",
    name: "Good",
    component: Good,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

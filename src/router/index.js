import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "/chat/user1",
      name: "user1",
      component: () => import("../pages/user/ChatPage1.vue"),
    },
    {
      path: "/chat/user2",
      name: "user2",
      component: () => import("../pages/user/ChatPage2.vue"),
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/produtos",
      name: "product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/categorias",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
  ],
});

export default router;

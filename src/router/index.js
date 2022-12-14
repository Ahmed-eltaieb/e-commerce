import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/monitors",
    name: "monitors",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MonitorsView.vue"),
  },
  {
    path: "/chairs",
    name: "chairs",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ChairsView.vue"),
  },
  {
    path: "/laptops",
    name: "laptops",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LaptopsView.vue"),
  },
  {
    path: "/accessories",
    name: "accessories",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AccessoriesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

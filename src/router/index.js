import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DonorView from "../views/DonorView.vue";
import DoneeView from "../views/DoneeView.vue";
import AboutView from "../views/AboutView.vue";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/doar",
      name: "Donor",
      component: DonorView,
    },
    {
      path: "/cadastro",
      name: "Donee",
      component: DoneeView,
    },
    {
      path: "/sobre",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;

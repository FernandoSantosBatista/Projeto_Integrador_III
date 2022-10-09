import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DonorView from "../views/DonorView.vue";
import DoneeView from "../views/DoneeView.vue";
import AboutView from "../views/AboutView.vue";
import PageView from "../views/PageView.vue";
import DonationController from "../views/DonationController.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/obter-de-graca-a-formula-para-criancas",
      name: "page",
      component: PageView,
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
      path: "/doacao",
      name: "Donation",
      component: DonationController,
    },
    {
      path: "/sobre",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;

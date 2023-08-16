import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/master/Dashboard.vue";
import Home from "../pages/Home.vue";
import Profile from "../pages/Profile.vue";

const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
  },
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
  },
];

const router = Router();

export default router;

function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });

  return router;
}

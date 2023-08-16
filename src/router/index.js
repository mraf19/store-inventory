import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/master/Dashboard.vue";
import Items from "../pages/Items.vue";
import Customers from "../pages/Customers.vue";
import Sales from "../pages/Sales.vue";
import Home from "../pages/Home.vue";

const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
    children: [
      {
        name: "Home",
        path: "/home",
        component: Home,
      },
      {
        name: "Items",
        path: "/items",
        component: Items,
      },
      {
        name: "Customes",
        path: "/customers",
        component: Customers,
      },
      {
        name: " Sales",
        path: "/sales",
        component: Sales,
      },
    ],
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

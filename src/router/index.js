import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/master/Dashboard.vue";
import Items from "../pages/Items.vue";
import Customers from "../pages/Customers.vue";
import Sales from "../pages/Sales.vue";
import Home from "../pages/Home.vue";
import FormItem from "../components/FormItem.vue";
import FormCustomer from "../components/FormCustomer.vue";
import FormSales from "../components/FormSales.vue";

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
      {
        name: "FormItem",
        path: "/form-item",
        component: FormItem,
      },
      {
        name: "FormCustomer",
        path: "/form-customer",
        component: FormCustomer,
      },
      {
        name: "FormSales",
        path: "/form-sales",
        component: FormSales,
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

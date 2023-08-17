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
        name: "Customers",
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
        name: "FormItemUpdate",
        path: "/form-item/:id",
        component: FormItem,
      },
      {
        name: "FormCustomer",
        path: "/form-customer",
        component: FormCustomer,
      },
      {
        name: "FormCustomerUpdate",
        path: "/form-customer/:id",
        component: FormCustomer,
      },
      {
        name: "FormSales",
        path: "/form-sales",
        component: FormSales,
      },
      {
        name: "FormSalesUpdate",
        path: "/form-sales/:id",
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

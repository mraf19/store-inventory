import { createApp } from "vue";
import App from "./App.vue";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

//CSS
import "./style.css";

//Router
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(Vue3Toasity, { autoClose: 3000 });
app.mount("#app");

import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";

import App from "./App.vue";
import { Menu } from "@scenes";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: "", name: "Menu", component: Menu }],
});

const vueApp = createApp(App);

vueApp.use(router);
vueApp.mount("#app");

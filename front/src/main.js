import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ViewManager from "./services/ViewManager";

ViewManager.checkStatus();

const app = createApp(App);
app.use(router).use(router).mount("#app");

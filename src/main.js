import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
window.Kakao.init("45d62b998539b3e895f88ce7c6cc4fe4");

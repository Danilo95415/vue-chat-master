import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import TitleMixin from "./mixins/title.js";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.mixin(TitleMixin);
app.mount("#app");

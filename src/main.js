import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Ensure this path is correct

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Create and mount the app with the router
createApp(App).use(router).mount("#app");

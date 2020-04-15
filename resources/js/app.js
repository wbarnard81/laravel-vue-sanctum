require("./bootstrap");
import VueRouter from "vue-router";
import routes from "./routes";

window.Vue = require("vue");
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes
});

axios.defaults.withCredentials = true;

Vue.component("app", require("./components/App.vue").default);

const app = new Vue({
    router,
    el: "#app"
});

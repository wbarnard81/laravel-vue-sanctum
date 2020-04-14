require("./bootstrap");

window.Vue = require("vue");

axios.defaults.withCredentials = true;

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

const app = new Vue({
    el: "#app"
});

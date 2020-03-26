import Vue from "vue";
import App from "./App.vue";
import "./../node_modules/bulma/css/bulma.css";
import store from "./store/store";
import axios from "axios";
import "./../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./../node_modules/@fortawesome/fontawesome-free/js/all.js";
import router from "./router";
Vue.config.productionTip = false;
new Vue({
  store,
  axios,
  router,
  render: h => h(App)
}).$mount("#app");

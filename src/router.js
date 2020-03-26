import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("./components/Login.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/Login.vue")
    },
    {
      path: "/bank",
      name: "bank",
      component: () => import("./components/Bank.vue")
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("./components/Edit.vue")
    },
    {
      path: "/exporter",
      name: "exporter",
      component: () => import("./components/Exporter.vue")
    },
    {
      path: "/importer",
      name: "importer",
      component: () => import("./components/Importer.vue")
    }
  ]
});

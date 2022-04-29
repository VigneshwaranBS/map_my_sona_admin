import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import dashboard from "../views/dashboard";
import addproduct from "../views/addproduct";
import updatedata from "../views/updateData";
import generateqr from "../views/generateQr";
import reportandcontact from "../views/reportandcontact";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: dashboard,
  },
  {
    path: "/addproduct",
    name: "addproduct",
    component: addproduct,
  },
  {
    path: "/updatedata",
    name: "updatedata",
    component: updatedata,
  },
  {
    path: "/generateQR",
    name: "generateqr",
    component: generateqr,
  },
  {
    path: "/reportandcontact",
    name: "reportandcontact",
    component: reportandcontact,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

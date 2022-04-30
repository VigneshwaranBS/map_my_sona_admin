import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/auth/login";
import dashboard from "../views/dashboard";
import addproduct from "../views/addproduct";
import updatedata from "../views/updateData";
import generateqr from "../views/generateQr";
import reportandcontact from "../views/reportandcontact";

// import defaultLayout from "../layout/default";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: login,
    name: "login",
    meta: {
      authPage: true,
    },
  },

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home"),
  },
  {
    path: "/facilities",
    name: "Facilities",
    component: () => import("../views/facilities"),
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: () => import("../views/rooms"),
  },
  {
    path: "/contact",
    name: "Contact-us",
    hidden: true,
    // component: () => import("../views/contact"),
  }
];

const router = new VueRouter({
  routes
})

export default router

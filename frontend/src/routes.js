
import Index from "./views/Index.js";
import Profile from "./views/Profile.js";
import Register from "./views/Register.js";
import Login from "./views/Login.js";
import Mydevices from "./views/Devices/Mydevices";
import Adddevice from "./views/Devices/Adddevice";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },

  {
    path: "/adddevice",
    name: "Add New device",
    icon: "fa fa-plus text-primary",
    component: Adddevice,
    layout: "/admin",
  },
  {
    path: "/devices",
    name: "Devices",
    icon: "fa fa-tools text-orange",
    component: Mydevices,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },

  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "",
    icon: "",
    component: Register,
    layout: "/auth",
  },
];
export default routes;

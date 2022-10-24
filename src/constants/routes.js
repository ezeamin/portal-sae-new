import Home from "../views/Home/Home";
import Profile from "../views/Profile/Profile";

const routes = {
  HOME: {
    path: '/',
    component: Home, 
  },
  MY_PROFILE: {
    path: '/perfil',
    component: Profile,
  }
};

export default routes;


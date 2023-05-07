import { createRouter, createWebHistory } from '@ionic/vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ServicesPage from '../views/ServicesPage.vue';
import ContactPage from '../views/ContactPage.vue';
import Admin from '../views/Admin.vue';
import Registration from '../views/Registration.vue';
import SignIn from '../views/SignIn.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: HomePage
  },
  {
    path: '/About',
    component: AboutPage
  },
  {
    path: '/Services',
    component: ServicesPage
  },
  {
    path: '/Contact',
    component: ContactPage
  },
  {
    path: '/Admin',
    component: Admin,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/Register',
    component: Registration
  },
  {
    path: '/SignIn',
    component: SignIn
  },
  {
    path: '/Settings',
    component: () => import ('../views/Settings.vue')
  },
  {
    path: '/DarkMode',
    component: () => import ('../theme/DarkModeToggle.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

const getCurrentUser = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you don't have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;

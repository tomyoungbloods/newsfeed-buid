import Vue from 'vue'
import Router from 'vue-router'
import NewsFeed from '@/components/NewsFeed'
import MethodeEen from '@/components/methodes/MethodeEen'
import MethodeTwee from '@/components/methodes/MethodeTwee'
import MethodeDrie from '@/components/methodes/MethodeDrie'
import MethodeVier from '@/components/methodes/MethodeVier'
import MethodeVijf from '@/components/methodes/MethodeVijf'
import MethodeZes from '@/components/methodes/MethodeZes'
import ViewMethodeVier from '@/components/ViewMethodeVier' 
import CreateNews from '@/components/news/CreateNews'
import NewsDashboard from '@/components/news/NewsDashboard'
import ViewNews from '@/components/news/ViewNews'
import EditNews from '@/components/news/EditNews' 
import Login from '@/components/Login'
import Register from '@/components/Register'
import firebase, { functions } from 'firebase'

 
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'news-feed',
      component: NewsFeed,

    },
    {
      path: '/news',
      name: 'news-dashboard',
      component: NewsDashboard,
      meta: {
        requiresAuth: true

      }
    },
    {
      path: '/new-news',
      name: 'new-news',
      component: CreateNews,
      meta: {
        requiresAuth: true

      }
    },
    {
      path: '/news/:news_id',
      name: 'view-news',
      component: ViewNews,
    },
    {
      path: '/news/edit/:news_id',
      name: 'edit-news',
      component: EditNews,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/methode-1',
      name: 'methode-een',
      component: MethodeEen,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/methode-2',
      name: 'methode-twee',
      component: MethodeTwee,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/methode-3',
      name: 'methode-drie',
      component: MethodeDrie,
    },
        {
      path: '/methode-4',
      name: 'methode-vier',
      component: MethodeVier,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/methode-4-results',
      name: 'view-methode-vier',
      component: ViewMethodeVier,
    },
    {
      path: '/methode-5',
      name: 'methode-vijf',
      component: MethodeVijf,
    },
    {
      path: '/methode-6',
      name: 'methode-zes',
      component: MethodeZes, 
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true

      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
  ]
})

// NAV Guards
router.beforeEach((to, from, next) => {
    // Check for requiredAuth guard
    if(to.matched.some(record => record.meta.requiresAuth)) {
      // Check if NOT logged in
      if(!firebase.auth().currentUser){
        // Go to login
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        // Proceed to route
        next();
      }
    }else if(to.matched.some(record => record.meta.requiresGuest)){
      if(firebase.auth().currentUser){
        // Go to login
        next({
          path: '/news',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        // Proceed to route
        next();
    }
   } else {
      // Proceed to route
      next();
    }
});

export default router;

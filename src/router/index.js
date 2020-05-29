import Vue from 'vue'
import Router from 'vue-router' 
import NewsFeed from '@/components/NewsFeed'
import MethodeEen from '@/components/methodes/MethodeEen'
import MethodeTwee from '@/components/methodes/MethodeTwee'
import MethodeDrie from '@/components/methodes/MethodeDrie'
import MethodeVier from '@/components/methodes/MethodeVier'
import MethodeVijf from '@/components/methodes/MethodeVijf'
import MethodeZes from '@/components/methodes/MethodeZes'
import MethodeZeven from '@/components/methodes/MethodeZeven'
import MethodeAcht from '@/components/methodes/MethodeAcht'
import MethodeNegen from '@/components/methodes/MethodeNegen'
import MethodeTien from '@/components/methodes/MethodeTien/MethodeTien'
import MethodeElf from '@/components/methodes/MethodeElf'
import MethodeTwaalf from '@/components/methodes/MethodeTwaalf'
import ViewMethodeVier from '@/components/ViewMethodeVier' 
import CreateNews from '@/components/news/CreateNews'
import NewsDashboard from '@/components/news/NewsDashboard'
import ViewNews from '@/components/news/ViewNews'
import EditNews from '@/components/news/EditNews' 
import Results1 from '@/components/results/Results1' 
import Results2 from '@/components/results/Results2' 
import Results3 from '@/components/results/Results3' 
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
      path: '/methode-7',
      name: 'methode-zeven',
      component: MethodeZeven, 
    },
    {
      path: '/methode-8',
      name: 'methode-acht',
      component: MethodeAcht, 
    },
    {
      path: '/methode-9',
      name: 'methode-negen',
      component: MethodeNegen, 
    },
    {
      path: '/methode-10',
      name: 'methode-tien',
      component: MethodeTien, 
    },
    {
      path: '/methode-11',
      name: 'methode-elf',
      component: MethodeElf, 
    },
    {
      path: '/methode-12',
      name: 'methode-12',
      component: MethodeTwaalf, 
    },
    {
      path: '/results-1',
      name: 'results-1',
      component: Results1, 
    },
    {
      path: '/results-2',
      name: 'results-2',
      component: Results2, 
    },
    {
      path: '/results-3',
      name: 'results-3',
      component: Results3, 
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

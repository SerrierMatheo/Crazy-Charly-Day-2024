import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ConnexionView from '../views/ConnexionView.vue';
import InscriptionView from '../views/InscriptionView.vue';
import AuthView from "../views/AuthView.vue";
import AteliersView from "../views/AteliersView.vue";
import CandidaturesView from "../views/CandidaturesView.vue";
import PlanningView from "../views/PlanningView.vue";
import LogoutVue from '../components/Logout.vue';
import AffectationsList from '@/components/AffectationsList.vue';
import AtelierCard from '@/components/AtelierCard.vue';
import CandidatureForm from '@/components/CandidatureForm.vue';
import NouvelAtelier from '@/components/NouvelAtelier.vue';
import PlanningDetails from '@/components/PlanningDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/ateliers',
      name: 'ateliers',
      component: AteliersView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/ateliers/:id',
      name: 'atelier',
      component: AtelierCard,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/ateliers/:id/candidatures',
      name: 'candidatures',
      component: CandidaturesView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/ateliers/:id/candidatures/new',
      name: 'candidature/new',
      component: CandidatureForm,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/ateliers/:id/affectations',
      name: 'affectations',
      component: AffectationsList,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/ateliers/:id/affectations/new',
      name: 'affectation/new',
      component: NouvelAtelier,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/planning',
      name: 'planning',
      component: PlanningView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/planning/:id',
      name: 'planning/details',
      component: PlanningDetails,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: 'login',
          name: 'auth/login',
          component: ConnexionView,
        },
        {
          path: '/logout',
          name: 'logout',
          component: LogoutVue,
        },
        {
          path: 'register',
          name: 'auth/register',
          component: InscriptionView,
        },
      ],
    },
  ]
})

export default router

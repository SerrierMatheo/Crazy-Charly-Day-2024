import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ConnexionView from '../views/ConnexionView.vue';
import InscriptionView from '../views/InscriptionView.vue';
import AuthView from "../views/AuthView.vue";
import AteliersView from "../views/AteliersView.vue";
import CandidaturesView from "../views/CandidaturesView.vue";
import PlanningView from "../views/PlanningView.vue";
import ProfilView from "../views/ProfilView.vue";
import AtelierDetailsView from "../views/AtelierDetailsView.vue";
import Page404 from "../views/Page404.vue";
import LogoutVue from '../components/Logout.vue';
import AffectationsList from '@/components/AffectationsList.vue';
import AtelierCard from '@/components/AtelierCard.vue';
import CandidatureForm from '@/components/CandidatureForm.vue';
import NouvelAtelier from '@/components/NouvelAtelier.vue';
import PlanningDetails from '@/components/PlanningDetails.vue';
import AtelierDetails from '@/components/AtelierDetails.vue';
import ProfilInfo from '@/components/ProfilInfo.vue';

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
    {
      path: '/ateliers',
      name: 'ateliers',
      component: AteliersView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/candidatures',
      name: 'candidatures',
      component: CandidaturesView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/planning',
      name: 'planning',
      component: PlanningView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/ateliers/:id',
      name: 'atelier-details',
      component: AtelierDetailsView,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'affectations',
          name: 'affectations',
          component: AffectationsList,
        },
        {
          path: 'atelier',
          name: 'atelier',
          component: AtelierCard,
        },
        {
          path: 'candidature',
          name: 'candidature',
          component: CandidatureForm,
        },
        {
          path: 'nouvel-atelier',
          name: 'nouvel-atelier',
          component: NouvelAtelier,
        },
        {
          path: 'planning-details',
          name: 'planning-details',
          component: PlanningDetails,
        },
        {
          path: 'atelier-details',
          name: 'atelier-details',
          component: AtelierDetails,
        },
        {
          path: 'profil-info',
          name: 'profil-info',
          component: ProfilInfo,
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: Page404
    }
  ]
})

export default router

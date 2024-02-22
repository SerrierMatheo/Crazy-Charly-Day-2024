<template>
    <div>
      <h1 class="mb-4">Planning des Ateliers</h1>
  
      <!-- Liste des ateliers -->
      <div v-for="atelier in ateliers" :key="atelier.id">
        <PlanningDetails :atelier="atelier" />
        <hr class="my-4">
      </div>
    </div>
  </template>
  
  <script>
  import PlanningDetails from "@/components/PlanningDetails.vue";
  
  export default {
    data() {
      return {
        ateliers: [] // Récupérer les données des ateliers depuis l'API
      };
    },
    methods: {
      // Méthode pour récupérer la liste des ateliers depuis l'API (à implémenter)
      chargerAteliers() {
        // ...
      }
    },
    mounted() {
      // Charger la liste des ateliers lors de la création de la vue
      this.chargerAteliers();
    },
    components: {
      PlanningDetails
    }
  };
  </script>
  
  <style scoped>
  /* Ajouter du style personnalisé ici, si nécessaire */
  </style>
  
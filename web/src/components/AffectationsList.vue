<template>
    <div>
      <h3 class="mb-3">Liste des Affectations</h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="(affectation, index) in affectations" :key="index">
          {{ affectation.nom }} {{ affectation.prenom }} - {{ affectation.atelier.nom }}
          <!-- Ajouter d'autres informations d'affectation au besoin -->
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      affectations: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajouter du style personnalisé ici, si nécessaire */
  </style>
  
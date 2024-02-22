<template>
    <div>
      <h2 class="mb-4">{{ atelier.nom }}</h2>
      <div class="card">
        <div class="card-body">
          <p class="card-text">{{ atelier.description }}</p>
          <p class="card-text"><small class="text-muted">Capacité : {{ atelier.nb_places_dispo }} personnes</small></p>
          <p class="card-text">Date et Heure : {{ atelier.date }}</p>
          <h5 class="card-subtitle mb-2 text-muted">Participants :</h5>
          <ul>
            <li v-for="(participant, index) in atelier.participants" :key="index">
              {{ participant.nom }} {{ participant.prenom }}
              <!-- Ajouter d'autres informations du participant au besoin -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      atelier: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajouter du style personnalisé ici, si nécessaire */
  </style>
  
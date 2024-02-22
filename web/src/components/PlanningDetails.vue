<template>
    <div>
      <h3 class="mb-3">Détails de l'Atelier</h3>
      <div v-if="atelier">
        <h4>{{ atelier.nom }}</h4>
        <p>{{ atelier.description }}</p>
        <p>Capacité : {{ atelier.capacite }} personnes</p>
        <p>Date et Heure : {{ atelier.date }}</p>
        <h5>Liste des Participants</h5>
        <ul class="list-group">
          <li class="list-group-item" v-for="(participant, index) in atelier.participants" :key="index">
            {{ participant.nom }} {{ participant.prenom }}
            <!-- Ajouter d'autres informations du participant au besoin -->
          </li>
        </ul>
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
  
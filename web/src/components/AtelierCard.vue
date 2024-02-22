<template>
    <div class="card">
      <img :src="atelier.image" class="card-img-top" alt="Image de l'atelier">
      <div class="card-body">
        <h5 class="card-title">{{ atelier.nom }}</h5>
        <p class="card-text"> Thématique : {{ atelier.thematique }}</p>
        <p class="card-text">{{ atelier.description }}</p>
        <p class="card-text"><small class="text-muted">Capacité : {{ atelier.nb_places_dispo }} personnes</small></p>
        <p class="card-text"><small class="text-muted">Date et Heure : {{ atelier.date_debut }} - {{ atelier.date_fin }}</small></p>
        <router-link :to="{ name: 'AtelierDetails', params: { id: atelier.id } }" class="btn btn-custom mb-2">Détails</router-link>
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
  .card {
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }

  .btn-custom {
    background-color: #FFA500;
    border-color: #FFA500;
  }
  </style>
  
<template>
    <div>
      <h3 class="mb-3">Formulaire de Candidature</h3>
      <form @submit.prevent="soumettreCandidature">
        <div class="form-group">
          <label for="nom">Nom</label>
          <input type="text" class="form-control" v-model="candidature.nom" required>
        </div>
        <div class="form-group">
          <label for="prenom">Prénom</label>
          <input type="text" class="form-control" v-model="candidature.prenom" required>
        </div>
        <div class="form-group">
          <label for="email">Adresse Email</label>
          <input type="email" class="form-control" v-model="candidature.email" required>
        </div>
        <!-- Liste des ateliers disponibles -->
        <div class="form-group">
          <label for="atelier">Choisir un Atelier</label>
          <select class="form-control" v-model="candidature.atelier" required>
            <option v-for="atelier in ateliers" :key="atelier.id" :value="atelier.id">
              {{ atelier.nom }}
            </option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Soumettre la Candidature</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        candidature: {
          nom: '',
          prenom: '',
          email: '',
          atelier: null
        }
      };
    },
    props: {
      ateliers: {
        type: Array,
        required: true
      }
    },
    methods: {
      soumettreCandidature() {
        // Logique pour soumettre la candidature (à implémenter)
        console.log('Candidature soumise :', this.candidature);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajouter du style personnalisé ici, si nécessaire */
  </style>
  
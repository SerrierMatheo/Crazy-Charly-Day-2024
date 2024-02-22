<template>
  <div>
    <h1 class="mb-4">Détails de l'Atelier</h1>
    <AtelierDetails :atelier="atelier" />
  </div>
</template>

<script>
import AtelierDetails from "@/components/AtelierDetails.vue"; // Assurez-vous que le chemin est correct

export default {
  data() {
    return {
      atelier: {
        nom: "Atelier Cuisine Italienne",
        description: "Apprenez à cuisiner de délicieux plats italiens.",
        capacite: 20,
        date: "10/03/2024 18:00",
        participants: [
          { nom: "Participant1", prenom: "Prenom1" },
          { nom: "Participant2", prenom: "Prenom2" }
          // Ajouter d'autres participants au besoin
        ]
      }
    };
  },
  components: {
    AtelierDetails
  }
};
</script>

<style scoped>
/* Ajouter du style personnalisé ici, si nécessaire */
</style>

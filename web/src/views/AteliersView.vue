<template>
    <div class="container mt-5">
        <h1 class="mb-4">Découvrez nos Ateliers Culinaires</h1>

        <!-- Affichage de la liste des ateliers -->
        <div class="row">
            <div v-for="atelier in ateliers" :key="atelier.id" class="col-lg-4 mb-4">
                <AtelierCard :atelier="atelier" />
            </div>
        </div>

        <!-- Création d'un nouvel atelier (réservé aux administrateurs) -->
        <NouvelAtelier v-if="utilisateurAdmin" @creerAtelier="creerAtelier" />
    </div>
</template>
  
<script>
import AtelierCard from "@/components/AtelierCard.vue";
import NouvelAtelier from "@/components/NouvelAtelier.vue";

export default {
    data() {
        return {
        ateliers: [], // Récupérer les données des ateliers depuis l'API
        utilisateurAdmin: true // Remplacer par la logique d'authentification
        };
    },
    methods: {
        // Méthode pour récupérer la liste des ateliers depuis l'API (à implémenter)
        chargerAteliers() {
        // ...
        },
        // Méthode pour créer un nouvel atelier (à implémenter)
        creerAtelier(nouvelAtelier) {
        // ...
        },
    },
    mounted() {
        // Charger la liste des ateliers lors de la création de la vue
        this.chargerAteliers();
    },
    components: {
        AtelierCard,
        NouvelAtelier
    }
};
</script>

<style scoped>
    /* Ajouter du style personnalisé ici, si nécessaire */
</style>

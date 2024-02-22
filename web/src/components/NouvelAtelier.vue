<template>
    <div>
      <h3 class="mb-3">Créer un Nouvel Atelier</h3>
        <form>
            <div class="form-group">
                <label for="nom">Nom de l'atelier:</label>
                <input type="text" class="form-control" id="nom" v-model="nouvelAtelier.nom">
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <textarea class="form-control" id="description" v-model="nouvelAtelier.description"></textarea>
            </div>
            <div class="form-group">
                <label for="capacite">Capacité:</label>
                <input type="number" class="form-control" id="capacite" v-model="nouvelAtelier.capacite">
            </div>
            <div class="form-group">
                <label for="image">Image:</label>
                <input type="text" class="form-control" id="image" v-model="nouvelAtelier.image">
            </div>
            <button type="submit" class="btn btn-custom mb-2">Créer</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
        nouvelAtelier: {
            nom: "",
            description: "",
            capacite: 0,
            image: ""
        }
        };
    },
    methods: {
        creerAtelier() {
        // Envoyer les données du nouvel atelier à l'API (à implémenter)
        }
    }
    
};
</script>
  
<style scoped>
    .btn-custom {
        background-color: #ff5722;
        color: white;
    }
</style>

<template>
    <div>
        <ProfilInfo :utilisateur="utilisateur" :moveUp="moveUp" :moveDown="moveDown" />
    </div>
</template>

<script>
import ProfilInfo from "@/components/ProfilInfo.vue";

export default {
    data() {
        return {
            utilisateur: {
                nom: "Nom Utilisateur",
                prenom: "Prenom Utilisateur",
                email: "utilisateur@email.com",
                thematiques: ["IT - cuisine italienne", "FR - cuisine française", "MEX - cuisine Amérique du Sud", "JP - cuisine japonaise", "GR - cuisine grecque", "OR - cuisine orientale"]
            }
        };
    },
    components: {
        ProfilInfo
    },
    methods: {
        moveUp(index) {
            if (index > 0) {
                const temp = this.utilisateur.thematiques[index];
                this.utilisateur.thematiques[index] = this.utilisateur.thematiques[index - 1];
                this.utilisateur.thematiques[index - 1] = temp;
            }
        },
        moveDown(index) {
            if (index < this.utilisateur.thematiques.length - 1) {
                const temp = this.utilisateur.thematiques[index];
                this.utilisateur.thematiques[index] = this.utilisateur.thematiques[index + 1];
                this.utilisateur.thematiques[index + 1] = temp;
            }
        }
    }
};
</script>

<style scoped>
/* Ajouter du style personnalisé ici, si nécessaire */
</style>
<template>
    <div>
        <h2 class="mb-2"> Profil </h2>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ utilisateur.nom }} -- {{ utilisateur.prenom }}</h5>
                <p class="card-text">Adresse Email: {{ utilisateur.email }}</p>
                <h6 class="card-subtitle mb-2 text-muted">Thématiques Préférées :</h6>
                <ul>
                    <li v-for="(thematique, index) in utilisateur.thematiques" :key="index">
                        {{ thematique }}
                        <button @click="moveUp(index)">Monter</button>
                        <button @click="moveDown(index)">Descendre</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['utilisateur', 'moveUp', 'moveDown']
};
</script>

<style scoped>
.mb-2 {
    margin: 0.5rem;
}
</style>
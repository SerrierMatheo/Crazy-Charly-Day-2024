<script>
export default {
  name: 'NotFound'
}
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1 class="display-1">404</h1>
        <p class="lead">Désolé, la page que vous cherchez n'existe pas.</p>
        <router-link to="/" class="btn btn-primary">Retour à l'accueil</router-link>
    </div>
</template>
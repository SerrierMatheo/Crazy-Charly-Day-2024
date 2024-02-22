<script>
import Login from "../components/Login.vue";

export default {
  components: {
    Login
  },
}
</script>

<template>
  <main class="day-text">
    <Login/>
    <RouterLink to="/auth/register" class="input-field">Pas de compte? S'inscrire.</RouterLink>
  </main>
</template>
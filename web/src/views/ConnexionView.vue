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
    <div> Pas de compte ? <RouterLink to="/auth/register" class="link"> S'inscrire.</RouterLink> </div>
  </main>
</template>
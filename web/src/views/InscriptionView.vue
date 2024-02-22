<script>
import Register from "../components/Register.vue";

export default {
  components: {
    Register
  }
}
</script>

<template>
  <main class="day-text">
    <Register/>
    <div class="link">
    <RouterLink to="/auth/login" class="link">Déja un compte? Se connecter.</RouterLink>
  </div>
  </main>
</template>
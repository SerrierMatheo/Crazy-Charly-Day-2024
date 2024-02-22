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
    <div>Déja un compte ? <RouterLink to="/auth/login" class="link"> Se connecter.</RouterLink> </div>
  </div>
  </main>
</template>
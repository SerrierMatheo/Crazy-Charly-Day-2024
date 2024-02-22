<template>
    <form @submit.prevent="submitForm" class="form">
      <div class="h1" id="heading">Connectez-vous</div>
      <div class="field">
      </div>
      <input value="Connexion" class="btn" type="submit">
    </form>
  </template>

<script>
import { useAuthStore } from "@/stores/authStore.js";
import { mapActions } from "pinia";
import router from "@/router/index.js";

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["login"]),
    async submitForm() {
      try {

        const response = await this.$api.get("/profile");

        if (response.status === 200) {
          this.login();
          await router.push("/");
          this.$toast.success('Connexion réussie');
        } else {
          this.$toast.error('Identifiant invalide');
        }
      } catch (error) {
        this.$toast.error('Identifiant invalide');
      }
    }
  }
}
</script>

  
 
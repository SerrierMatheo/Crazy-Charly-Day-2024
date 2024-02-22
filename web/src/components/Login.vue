<template>
    <form @submit.prevent="submitForm" class="form">
      <div class="h1" id="heading">Connectez-vous</div>
      <div class="field">
        <label for="email">Identifiant</label>
        <input v-model="email" type="email" id="email" name="email" placeholder="Identifiant">
        <br>
        <label for="password">Mot de passe</label>
        <input v-model="password" type="password" id="password" name="password" placeholder="Mot de passe">
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

        this.login();
        await router.push("/");
        this.$toast.success('Connexion réussie');
        /**
         //const response = await this.$api.get("/profile");


         if (response.status === 200) {
         this.login();
         await router.push("/");
         this.$toast.success('Connexion réussie');
         } else {
         this.$toast.error('Identifiant invalide');
         }**/
      } catch (error) {
        this.$toast.error('Identifiant invalide');
      }
    }
  }
}
</script>

  
 
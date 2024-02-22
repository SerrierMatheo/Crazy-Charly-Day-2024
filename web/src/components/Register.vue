<template>
  <div>
    <form @submit.prevent="submitForm" class="form">
      <div class="h1" id="heading">Inscrivez-vous</div>
      <div class="field">
      <input placeholder="Name" class="input-field" v-model="name" id="name" name="name" type="text" required>
    </div>
    <div class="field">
      <input placeholder="Email" class="input-field" v-model="email" id="email" name="email" type="email" required>
    </div>
      <input value="Inscription" class="btn" type="submit">
    </form>
  </div>
</template>

<script>
import {useAuthStore} from "@/stores/authStore.js";
import {mapState, mapActions} from "pinia";

export default {
  data() {
    return {
      name: '',
      email: '',
    }
  },
  computed: {
    ...mapState(useAuthStore, ["is_loggedin"])
  },
  methods: {
    ...mapActions(useAuthStore, ["login"]),
    submitForm() {
      console.log(this.name)
      this.$api.post('/register', {
        name: this.name,
        email: this.email
      }).then(() => {
        this.login();
      }).catch((error) => {
        window.alert("Veuillez remplir tous les champs correctement");
      });
    }
  }
}
</script>
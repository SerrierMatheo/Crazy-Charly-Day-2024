<template>
  <header>
    <nav class="side">
      <RouterLink to="/">
        <img src="../assets/icone.png" style="width: 100px;height: auto;">
        <img src="../assets/profile_icon.png" style="width: 50px;height: auto;">
      </RouterLink>
      <RouterLink to="/logout"><div class="deco">Déconnexion</div></RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
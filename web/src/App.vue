<script setup>
import { RouterView } from 'vue-router';
import Header from "@/components/Header.vue";

</script>

<template>
  <div class="wrapper">
    <Header />

  <main class="content">
    <RouterView />
  </main>
</div>

</template>

<style scoped>
</style>

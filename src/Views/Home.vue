<script setup lang="ts">

import BodyComponent from "../components/BodyComponent.vue";
</script>

<template>
  <RouterLink to="/login">Login</RouterLink>

  <body-component></body-component>

  <v-data-table :items="[]"></v-data-table>
</template>

<style scoped>

</style>

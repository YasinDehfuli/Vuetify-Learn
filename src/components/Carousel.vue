<script setup lang="ts">

import {ref} from "vue";

let id = 0;
const images = ref<
  {id:number, src:string}[]>([
  { id: id++, src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg" },
  { id: id++, src: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg' },
  { id: id++, src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg' }
])
</script>

<template>
  <v-carousel>
    <v-carousel-item v-for="image in images" key="image.id" :src="image.src">

    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>

</style>

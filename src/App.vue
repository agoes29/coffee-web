<script setup lang="ts">
  import {RouterView} from "vue-router"
  import Header from "../src/components/Header.vue"
</script>

<template>
  <Header />
  <div class="bg-gray-700">
    <RouterView />
  </div>
</template>

<style scoped></style>

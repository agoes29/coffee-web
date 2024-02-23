<script setup lang="ts">
import { RouterView } from "vue-router"
import Header from "../src/components/Header.vue"
</script>

<template>
  <div class="bg-gray-700">
    <RouterView />
  </div>
  <Header />
</template>

<style scoped></style>

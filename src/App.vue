<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import "./style.css";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
#app{
  height: 100vh !important;
  
}
body {
  height: 100vh !important;
  background: #1f1f1f;
}
</style>

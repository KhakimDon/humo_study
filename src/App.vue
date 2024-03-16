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
body {
  background: #1f1f1f;
}
</style>

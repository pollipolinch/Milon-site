<template>
  <div>
    <Navbar></Navbar>
    <div class="main-wrapper">
        <NuxtPage />
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import Navbar from "../components/Default/Navbar.vue";
import Footer from '../components/Default/Footer.vue'
const app: Ref<string | number> = ref("few");
</script>

<style scoped>
.main-wrapper{
  margin-top: 50px;
  width: 100%;
}
</style>

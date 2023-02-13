<script setup>
import NavBarVue from "../src/components/shared/Navbar.vue";
import FooterVue from "../src/components/shared/Footer.vue";
</script>

<template>
  <NavBarVue />
  <RouterView class="bg-primary-200" />
  <FooterVue />
</template>
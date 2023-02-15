<script setup>
import NavBarVue from "../src/components/shared/Navbar.vue";
import FooterVue from "../src/components/shared/Footer.vue";
</script>

<template>
  <NavBarVue class="bg-secondary-color"/>
  <RouterView class="bg-secondary-color" />
  <FooterVue />
</template>

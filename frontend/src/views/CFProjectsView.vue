<template>
  <div role="main" class="bg-secondary-color min-h-screen">
    <header class="h-72 flex items-center justify-center relative">
      <router-link to="/" class="arrow-container relative right-[10%]">
        <img src="../assets/img/back-arrow.svg" alt="" />
      </router-link>
      <h1
        class="font-montserrat text-3xl font-semibold text-primary-color whitespace-nowrap"
      >
        Explorá todos los proyectos
      </h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "CFProjectsView",
};
</script>

<style lang="scss" scoped></style>

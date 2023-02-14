<script setup>
import CFDetailCard from "../components/Cards/CFDetailCard.vue";
import CFText from "../components/Text/CFText.vue";
import arrowLeftIcon from "../assets/icons/arrow_left.svg";
</script>
<template>
  <div class="bg-secondary-color p-5">
    <img :src="arrowLeftIcon" alt="" />
    <CFText class="font-Montserrat font-bold text-xl" tag="h3"
      >Proyecto Don Tata</CFText
    >
    <CFDetailCard class="w-[1000px] m-auto" />
  </div>
</template>

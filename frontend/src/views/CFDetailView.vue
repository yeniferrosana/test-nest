<script setup>
import CFDetailCard from "../components/Cards/CFDetailCard.vue";
import CFText from "../components/Text/CFText.vue";
import arrowLeftIcon from "../assets/icons/arrow_left.svg";
</script>
<template>
  <img :src="arrowLeftIcon" alt="">
  <CFText tag="h3">Proyecto Don Tata</CFText>
  <CFDetailCard />
</template>

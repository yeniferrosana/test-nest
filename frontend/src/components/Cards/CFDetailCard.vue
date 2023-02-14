<script setup>
import CFBaseButton from "../Buttons/CFBaseButton.vue";
</script>
<template>
  <div
    class="bg-white grid grid-cols-2 grid-rows- h-[500px] shadow-lg rounded-lg p-5"
  >
    <div class="">
      <img
        class="block w-full h-full object-cover rounded-lg"
        src="https://api.lorem.space/image/movie"
        alt="title de prueba"
      />
    </div>
    <div class="font-Roboto">
      <h3 class="">Don Tata</h3>
      <span class="">Ya han invertido 67 personas</span>
      <p class="">
        Don Tata busca expandir su negocio. Con tu inversión podremos comprar
        mas de 500 productos y asi expandir la facturación, y asi poder llegar
        al millón de pesos.
      </p>
      <div class="grid">
        <div>$230.007</div>
        <div>$569.000</div>
        <div>Recaudado</div>
        <div>Meta</div>
      </div>
    </div>
    <CFBaseButton>Invertir</CFBaseButton>
  </div>
</template>

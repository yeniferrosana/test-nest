<script setup>
import CFBaseButton from "../Buttons/CFBaseButton.vue";
</script>
<template>
  <div class="bg-white">
    <div>
      <img
        src="https://api.lorem.space/image/movie?w=150&h=220"
        alt="title de prueba"
      />
    </div>
    <div>
      <h3>Don Tata</h3>
      <span>Ya han invertido 67 personas</span>
      <p>
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

<script setup>
import CFBaseButton from "../Buttons/CFBaseButton.vue";
import CFText from "../Text/CFText.vue";
import CFProgressBar from "../shared/ProgressBar.vue";

</script>
<template>
  <div class="bg-white grid grid-cols-1 grid-rows-[auto_auto_auto] lg:grid-cols-2 lg:grid-rows-[auto_130px] shadow-lg rounded-lg p-5 justify-items-center items-center">
    <div class="">
      <img
        class="block w-full h-full object-cover rounded-lg"
        src="https://s3-alpha-sig.figma.com/img/928d/4624/073b5033644948d52f303c23efa49e7c?Expires=1677456000&Signature=HuQl2KiAU5cFfrI6FGC~Hw9k-yTRI-esL77plc4xWt2seQQsdAf8Uoki9Ry~x3lcBX08O0ObV1VSyOQmdUPNsaBJufCwLNuZi4gZG~6ZSaT2IFs1oFbnsQedOyL8H9RjwXeHMaCY4v30oJMDE1pHcBQbhCKi41nUUxwnGDpQ8B-87OLS0EK1THK8CdI3auJMhMG1WleBjlIJANhqXEY6n~mK~7rXBUaPWaVKH2Fx0v6rTF96ddrZf~tkqupKlnjTEFXbUOpDO7FKiq5Hzr-MWwJrMPAlfUKWoOYDr8Kt3fVN8738Nc8K-e5HD-sB5SlVaWjiGrzINUQvuJ4xQMbteg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="title de prueba"
      />
    </div>
    <div class="font-Roboto lg:pl-14 grid grid-cols-1 grid-rows-[80px_1fr_50px_50px] p-10">
      <div>
        <CFText tag="h1" class="font-bold text-3xl">Don Tata</CFText>
        <CFText tag="span" class="text-secondary-color-400"
          >Ya han invertido 67 personas</CFText
        >
      </div>
      <CFText tag="p" class="py-5">
        Don Tata busca expandir su negocio. Con tu inversión podremos comprar mas de 500 productos y asi expandir la facturació  y asi poder llegar al millón de pesos
      </CFText>
      <div class="pr-14">
        <div class="flex items-start justify-center flex-col w-1/5 ml-auto">
          <CFText tag="span" class="text-primary-color">$569.000</CFText>
          <CFText tag="span" class="text-secondary-color-400">Meta</CFText>
        </div>
      </div>
      <CFProgressBar progress="1" limit="100"/>
    </div>
    <div class="lg:col-span-3">
      <CFBaseButton class="bg-secondary-color-500 p-3 rounded-xl font-bold text-xl m-auto w-[100px]">Invertir</CFBaseButton>
    </div>
  </div>
</template>

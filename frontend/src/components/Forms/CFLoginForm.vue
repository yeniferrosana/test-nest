<script setup>
/* import { useRouter } from "vue-router";
import { ref } from "vue";
import SPInput from "../input/SPInput.vue";
import SPButton from "../Buttons/SPButton.vue";
import SPText from "../Text/SPText.vue";

const router = useRouter();

function redirectToRegister() {
  router.push({ name: "register" });
}

const email = ref("");
const password = ref("");
const emailtextMessage = ref("");
const passwordtextMessage = ref("");
// eslint-disable-next-line no-useless-escape
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const handleEmailTextMessage = () => {
  if (!regexEmail.test(email.value)) {
    emailtextMessage.value = "Correo incorrecto";
  } else {
    emailtextMessage.value = "";
  }
};

// const handlePasswordTextMessage = () => {}; */
</script>
<template>
  <form class="py-6 flex flex-col">
    <h1 class="text-2xl font-semibold text-primary-color lg:text-3xl">
      Ingresa a tu cuenta
    </h1>
    <input
      type="text"
      class="w-full py-3 my-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
      placeholder="Email"
    />
    <input
      type="password"
      class="w-full py-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
      placeholder="Contraseña"
    />
    <label class="mt-6">
      <input type="checkbox" class="accent-primary-color-100" />
      <span class="ml-2 text-sm text-primary-color"
        >Recordarme en este dispositivo</span
      >
    </label>

    <a href="#" class="hover:underline text-sm my-4">
      ¿Perdiste tu contraseña?
    </a>
    <button
      type="button"
      class="md:w-1/2 w-full lg:w-1/2 bg-secondary-color-300 hover:bg-primary-color-100 font-medium text-sm px-5 py-2.5 focus:outline-none my-2"
    >
      Ingresar
    </button>
  </form>
</template>

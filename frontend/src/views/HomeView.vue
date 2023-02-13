<script>
  import SampleForm from '../components/shared/SampleForm.vue'
  export default {
    components: {
      SampleForm,
    }
  }
</script>

<style scoped>
  .pattern {
     background-image:url(https://res.cloudinary.com/yeniferramirez11/image/upload/v1676310397/diego-ph-SZYreZsJ-fE-unsplash_1_pb4dh4.png);
  }
</style>

<template>
  <main>
    <section id="hero" class="pattern bg-center bg-cover -mt-24">
      <div class="container px-6 mx-auto max-w-6xl">
        <div
          class="w-full h-[36rem]"
        >
          <div class="flex items-center w-full h-full">
              <div class="text-left">
                  <h1 class="text-3xl font-bold text-primary-50 lg:text-4xl">
                    Queremos ayudar.
                  </h1>
                  <h2 class="text-xl lg:text-2xl py-4">
                    Doná y ayuda a necesitados.
                  </h2>
                  <h2 class="text-xl lg:text-2xl pb-2">
                    Invierte en proyectoos.
                  </h2>
                  <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <a href="login" class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-primary-50 transition-colors duration-300 transform bg-primary rounded-3xl hover:bg-primary-200">Iniciar Sesión</a>
                    <a href="register" class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-primary-50 transition-colors duration-300 transform bg-primary-200 rounded-3xl lg:mx-4 hover:bg-white">Learn More</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section id="count">
      <div class="container px-5 py-24 mx-auto max-w-6xl">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 lg:w-1/3 w-full">
            <h2 class="title-font font-bold sm:text-4xl text-3xl text-primary-50">+650</h2>
            <p class="leading-relaxed text-xl">Personas invirtieron en mini pymes</p>
          </div>
          <div class="p-4 lg:w-1/3 w-full">
            <h2 class="title-font font-bold sm:text-4xl text-3xl text-primary-50">+3000</h2>
            <p class="leading-relaxed text-xl">Donaciones a ONG, y personas que necesitaban de tu ayuda</p>
          </div>
          <div class="p-4 lg:w-1/3 w-full">
            <h2 class="title-font font-bold sm:text-4xl text-3xl text-primary-50">+7000</h2>
            <p class="leading-relaxed text-xl">Proyectos Publicados</p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="bg-primary-300">
      <div class="container px-6 py-16 mx-auto  max-w-6xl">
        <div class="items-center lg:flex">
            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img class="w-full h-full lg:max-w-3xl p-2 rounded-md" src="../assets/contact.png" alt="Catalogue-pana.svg">
            </div>
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg p-2">
                <h1 class="text-3xl font-semibold text-primary-50 lg:text-4xl">Un equipo comprometido</h1>
                  
                <p class="mt-3 text-primary-50 text-xl">Creemos que ayudar al otro genera un mundo mejor. Formamos parte de un grupo qeu sabe que usando la tecnologia se llega a muchas personas.</p>
                <router-link to="contact">
                  <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-primary-50 transition-colors duration-300 transform bg-primary-150 rounded-3xl lg:w-auto hover:bg-primary-200 focus:outline-none">Conocenos</button>
                </router-link>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section id="projects">
      <div class="container px-5 py-24 mx-auto max-w-6xl">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 lg:w-1/3 w-full">
            <p>Componente Card</p>
          </div>
          <div class="p-4 lg:w-1/3 w-full">
            <p>Componente Card</p>
          </div>
          <div class="p-4 lg:w-1/3 w-full">
            <p>Componente Card</p>
          </div>
        </div>
        <div class="w-full text-center">
          <router-link to="projects">
            <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-primary-50 transition-colors duration-300 transform bg-primary-150 rounded-3xl lg:w-auto hover:bg-primary-200 focus:outline-none">Ver mas proyectos</button>
          </router-link>
        </div>
      </div>
    </section>
    <section id="form" class="bg-primary-300">
      <div class="container px-5 py-24 mx-auto max-w-6xl">
        <h1 class="text-3xl font-bold text-primary-50 lg:text-4xl text-center">
          Hablemos
        </h1>
        <SampleForm />
      </div>
    </section>
  </main>
</template>

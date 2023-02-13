<script>
  export default {
    name: 'SampleForm'
  }
</script>

<template>
  <form>
    <div class="flex justify-center">
      <div class="my-6">
        <input type="text" placeholder="Nombre" class="mt-2 block w-full placeholder-primary-50 rounded-lg border border-primary-50 bg-transparent px-5 py-2.5 text-primary-50 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40" />
        <input type="email" placeholder="Email" class="mt-2 block w-full placeholder-primary-50 rounded-lg border border-primary-50 bg-transparent px-5 py-2.5 text-primary-50 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40" />
        <input type="text" placeholder="Asunto" class="mt-2 block w-full placeholder-primary-50 rounded-lg border border-primary-50 bg-transparent px-5 py-2.5 text-primary-50 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40" />
        <textarea placeholder="Mensaje" class="mt-2 block w-full placeholder-primary-50 rounded-lg border border-primary-50 bg-transparent px-5 py-2.5 text-primary-50 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40" />
      </div>
    </div>
  </form>
</template>
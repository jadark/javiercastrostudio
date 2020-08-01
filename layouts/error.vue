<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Error 404</h1>
    <h1 v-else>Cualquier otro error</h1>
    <br>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'about' // you can set a custom layout for the error page
  }
</script>

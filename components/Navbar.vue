<template>
   <nav class="nav">
     <div class="namelogo">
       <h1>
          <nuxt-link to="/" exact>Javier Studio</nuxt-link>
       </h1>
     </div>
     <ul>
       <li :class="[currentPage == '/' ? activeClass : '', 'nav-item' ]">
         <nuxt-link to="/" exact>Home</nuxt-link>
       </li>
       <li :class="[currentPage == '/about' ? activeClass : '', 'nav-item' ]">
         <nuxt-link to="/about">¿Quien soy?</nuxt-link>
       </li>
       <li :class="[currentPage == '/posts' ? activeClass : '', 'nav-item' ]">
         <router-link to="/posts">Proyectos</router-link>
       </li>
       <li :class="[currentPage == '/contact' ? activeClass : '', 'nav-item' ]">
         <router-link to="/contact">Contáctame</router-link>
       </li>
     </ul>
   </nav>
</template>

<script>
  export default {
    data() {
      return {
        pageTitle: '',
        activeClass: 'active'
      }
    },
    mounted() {
      return this.pageTitle = this.$route.fullPath;
    },
    computed: {
      currentPage(){
        return this.$route.fullPath;
      }
    }
  }
</script>
<style lang="scss">
  .nav{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .namelogo{
      width: 40%;
      a{
        color: white;
        text-decoration: none;
        font-weight: 900;
      }
    }
    ul{
      margin: 0;
      padding: 0;
      display: flex;
      width: 60%;
      justify-content: flex-end;
      li{
        margin: 0 6px;
        padding: 0;
        list-style: none;
        a{
          padding: 4px;
          color: white;
          text-decoration: none;
        }
      }
    }
  }
</style>

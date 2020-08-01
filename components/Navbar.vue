<template>
   <nav class="nav">
     <div class="box_logo">
       <a href="" class="logo"></a>
     </div>
     <ul>
       <li :class="[currentPage == '/' ? activeClass : '', 'nav-item' ]">
         <nuxt-link to="/" exact>Home</nuxt-link>
       </li>
       <li :class="[currentPage == '/about' ? activeClass : '', 'nav-item' ]">
         <nuxt-link to="/about">¿Quien soy?</nuxt-link>
       </li>
       <li :class="[currentPage == '/posts' ? activeClass : '', 'nav-item' ]">
         <router-link to="/posts">Blog</router-link>
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

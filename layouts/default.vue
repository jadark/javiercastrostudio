<template>
  <div id="javierStudio" :class="isCurrentDay">
    <div class="wrapper">
      <NavBar/>
      <Nuxt />
    </div>
  </div>
</template>

<script>
  import NavBar from "../components/Navbar";
  export default {
    components: {
      NavBar
    },
    data(){
      return{
        isCurrentDay: ""
      }
    },
    created: function () {
      let hour = new Date().getHours();
      let name;
      if (hour >= 4 && hour <= 11) name = 'morning';
      if (hour >= 12 && hour <= 16) name = 'afternoon';
      if (hour >= 17 || hour <= 3) name = 'night';
      // if (hour >= 21 || hour <= 3) return 'night';
      this.isCurrentDay = name;
      // console.log(`Good ${timeOfDay()}!`);
    }
  }

</script>

<style lang="scss">
  @import 'normalize.css/normalize.css';
  body {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
    }
  }
  #javierStudio{
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    &.morning{
      background-color: #0abcf9;
      background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
    }
    &.afternoon{
      background-color: #182b3a;
      background-image: linear-gradient(315deg, #182b3a 0%, #20a4f3 74%);
    }
    &.night{
      background-color: #1b2845;
      background-image: linear-gradient(315deg, #1b2845 0%, #274060 74%);
    }
    .container{
      max-width: 1200px;
      padding: 0 1rem;
    }
  }
</style>


<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        javierstudio
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  head(){
    return{
      title: "Javier Studio | Developer",
      meta:[
        {
          hid: "description",
          name: "description",
          description: "Portfolio Personal"
        }
      ]
    }
  }
}
</script>

<style>
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>

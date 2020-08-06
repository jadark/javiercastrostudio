<template>
  <section class="home">
    <div class="container">
      <div class="box_content">
        <h2>¡Hola, {{greeting}}!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure at porro dicta accusamus dolor fugit, modi ratione rerum repellendus quo in similique assumenda aspernatur ab illo tempore ipsum nulla!</p>
      </div>
      <div class="primery_image">
          <img src="~/assets/images/person.svg" />
      </div>
    </div>
  </section>
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
  },
  data(){
    return{
      greeting: "",
      imageDay: ""
    }
  },
  created: function () {
    let hour = new Date().getHours();
    let name, thisImage;
    if (hour >= 4 && hour <= 11) name = 'buenos días'; thisImage = 'morning';
    if (hour >= 12 && hour <= 16) name = 'buenas tardes'; thisImage = 'aftermoon';
    if (hour >= 17 || hour <= 3) name = 'buenas noches'; thisImage = 'night';
    // if (hour >= 21 || hour <= 3) return 'night';
    this.greeting = name;
    this.imageDay = thisImage;
    // console.log(`Good ${timeOfDay()}!`);
    }
}
</script>

<style lang="scss" scoped>
  section.home{
    display: flex;
    min-height: calc(100vh - 68px);
    .container{
      display: flex;
      flex-flow: row;
      align-items: center;
    }
    .box_content{
      max-width: 60%;
      padding: 2rem;
      color: white;
    }
    .primery_image{
      width: 40%;
    }
  }
</style>

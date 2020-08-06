<template>
  <section id="about">
    <div class="container">
      <div class="box_content">
        <h2>¡Hola</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure at porro dicta accusamus dolor fugit, modi ratione rerum repellendus quo in similique assumenda aspernatur ab illo tempore ipsum nulla!</p>
      </div>
      <div class="box_tags">
      </div>
    </div>
  </section>
</template>

<script>
  import TagCloud from 'TagCloud'
  export default {
    mounted: function () {
      const container = '.box_tags';
      const texts = [
          'PHP', 'NodeJS', 'VueJs',
          'CSS3', 'Animation', 'Interactive',
          'Mouse', 'Rolling', 'Sphere',
          '6KB', 'v2.x',
      ];
      const options = {
        radius: 150
      };
      TagCloud(container, texts, options);
    }
  }
</script>

<style lang="scss">
  #about{
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
    .box_tags{
      width: 40%;
      display: flex;
      justify-content: center;
      .tagcloud{
        .tagcloud--item{
          color:#02121f
        }
      }
    }
  }
</style>

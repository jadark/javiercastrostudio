<template>
  <div class="box_head">
    <h1>List Post</h1>
    <ul>
      <!-- <li v-for="post of posts" v-bind:key="post.id">{{post.title}}</li> -->
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(res);
    return {
      posts: res.data
    }
  },
  // data(){
  //   return{
  //     posts:[ ]
  //   }
  // },
  // async created(){
  //   const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //   this.posts = resp.data
  //   console.log(resp);
  // }
}
</script>
<style lang="scss">
  .box_head {
    h1{
      color: red;
    }
  }
</style>

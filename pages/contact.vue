<template>
  <section class="contact">
    <div class="container">
      <div class="box_content">
        <h2>Haz una consulta</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure at porro dicta accusamus dolor fugit, modi ratione rerum repellendus quo in similique assumenda aspernatur ab illo tempore ipsum nulla!</p>
      </div>
      <div class="box_contact">
          <form @submit.prevent="submit">
            <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
              <label class="form__label">Name</label>
              <input class="form__input" v-model.trim="$v.name.$model"/>
              <div class="error" v-if="!$v.name.required">Name is required</div>
              <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
              <label class="form__label">Email</label>
              <input type="email" class="form__input" v-model="$v.email.$model">
              <div class="error" v-if="!$v.email.required">Email is required</div>
              <div class="error" v-if="!$v.email.email">no es un correo</div>
            </div>
            <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
Vue.use(Vuelidate)
export default {
  data(){
    return{
      name: "",
      age: 0,
      email: "",
      submitStatus: null
    }
  },
  validations:{
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    }
  },
  methods:{
    submit(){
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
      // Saving DataBase Firebase
      // this.$fireStore.collection("contact").add({
      //     name: this.name,
      //     email: this.email,
      //     message: this.message,
      //     date: new Date()
      // })
      // .then(function(res) {
      //     console.log("Document successfully written!");
      // })
      // .catch(function(error) {
      //     console.error("Error writing document: ", error);
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
  section.contact{
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
    .box_contact{
      width: 40%;
    }
  }
</style>

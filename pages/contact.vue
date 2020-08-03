<template>
  <section class="contact">
    <div class="container">
      <div class="box_content">
        <h2>Haz una consulta</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure at porro dicta accusamus dolor fugit, modi ratione rerum repellendus quo in similique assumenda aspernatur ab illo tempore ipsum nulla!</p>
      </div>
      <div class="box_contact">
          <form @submit.prevent="sendForm">
            <div class="form-input">
              <label for="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                class="input-control"
                maxlength="60"
                v-model="name"
              >
            </div>
            <div class="form-input">
              <label for="email">Correo:</label>
              <input
                type="email"
                id="email"
                name="email"
                class="input-control"
                maxlength="60"
                v-model="email"
              >
            </div>
            <div class="form-input">
              <label for="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                class="input-control"
                maxlength="200"
                cols="30"
                rows="10"
                v-model="message"
              >
              </textarea>
            </div>
            <div class="form-input">
              <input
                type="submit"
                value="Enviar"
                id="btnSubmit"
                class="btnSubmit"
              >
            </div>
          </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      email: '',
      message: '',
      error: ''
    }
  },
  methods:{
    sendForm(){
      // alert("Debe enviarse");
      // prevent default action of form submission
      // Add a new document in collection "contacts"
      this.$fireStore.collection("contact").add({
          name: this.name,
          email: this.email,
          message: this.message,
          date: new Date()
      })
      .then(function(res) {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      })
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

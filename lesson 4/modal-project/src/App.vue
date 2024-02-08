<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome...</p>
    <div v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja Givaway</h1>
        <p>Grab your ninja swag for half price</p>
      </Modal>
    </div>

    <div v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
        <h1>Sign up to the newsletter</h1>
        <p>For updates and promo codes!</p>
      </Modal>
    </div>

    <button @click="toggleModal">open modal</button>
    <br />
    <br />
    <button @click="toggleModalTwo">open modal two</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first vue app",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

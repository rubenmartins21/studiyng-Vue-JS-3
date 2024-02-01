const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The final empire",
      author: "Brandon Sandersen",
      age: 45,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent() {
      console.log("event");
    },
  },
});

app.mount("#app");

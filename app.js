const app = Vue.createApp({
  data() {
    return {
      url: "https://google.com",
      showBooks: true,
      books: [
        {
          title: "the final empire",
          author: "brandon sandersen",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the way of kings",
          author: "patrick rothfuss",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFavBook(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");

<template>
  <v-app>
    <Header/>
    <v-main>
      <!-- App.vueに入れることで自動でcontainerに割り当てられる -->
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/global/Header';
import Footer from '@/global/Footer';
// const STORAGE_KEY = 'books'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data() {
    return {
      books: [],
      newBook: null
    }
  },
  mounted() {
    // ローカルストレージにアイテムがあれば
    if (localStorage.getItem('STORAGE_KEY')) {
      try {
        // JSON.parseで値を持ってきて、this.booksにデータを渡す
        this.books = JSON.parse(localStorage.getItem('STORAGE_KEY'));
      } catch(e) {
        localStorage.removeItem('STORAGE_KEY');
      }
    }
  },
  methods: {
    addBook() {
      // 実際に何かしたことを入力する
      if (!this.newBook) {
        return;
      }
      // 追加があればpushして
      this.books.push(this.newBook);
      this.newBook = '';
      // this.saveBooksに保存する
      this.saveBooks();
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem('STORAGE_KEY', parsed);
    }
  }
};
</script>

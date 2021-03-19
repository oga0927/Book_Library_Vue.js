<template>
  <v-app>
    <Header/>
    <v-main>
      <!-- App.vueに入れることで自動でcontainerに割り当てられる -->
      <v-container>
        <router-view 
        @add-book-list="addBook"/>
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
    // (e)で子コンポーネントからデータを受け取る
    addBook(e) {
      
      // 追加があればpushして
      this.books.push({
        id: this.books.length,
        // 子ーコンポーネント
        title: e.title,
        image: e.image,
        // 説明
        discription: e.discription,
        // 読んだ日、感想
        readDate: '',
        // メモ
        memo: ''
      });
      // this.newBook = '';
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

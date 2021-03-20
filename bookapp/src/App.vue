<template>
  <v-app>
    <Header/>
    <v-main>
      <!-- App.vueに入れることで自動でcontainerに割り当てられる -->
      <v-container>
        <router-view 
        :books = "books"
        @add-book-list="addBook"
        @update-book-info="updateBookInfo"/>
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
        // 子コンポーネント
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
      // 最後に追加したid取得コード
      // console.log(this.books.splice(-1)[0].id);

      // 最新のidが入った状態
      this.goToEditPage(this.books.splice(-1)[0].id)
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem('STORAGE_KEY', parsed);
    },
    updateBookInfo(e) {
      // book:[]の中身を置き換える処理
      const updateInfo = {
        id: e.id,
        readDate: e.readDate,
        memo: e.memo,
        title:this.books[e.id].title,
        image: this.books[e.id].image,
        description: this.books[e.id].description
      }
      // e.idの1つ目が置き換わる
      this.books.splice(e.id, 1, updateInfo)
      // saveBooksにアクセスして保存
      this.saveBooks()
      // 保存した後にトップページに戻る
      this.$router.push('/')
    },
    // 最新のid
    goToEditPage(id) {
      // ページの切り替え
      this.$router.push(`/edit/${id}`)
    }
  }
};
</script>

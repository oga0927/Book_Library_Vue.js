<template>
  <v-app fluid>
    <app-header/>
      <v-main>
        <!-- App.vueに入れることで自動でcontainerに割り当てられる -->
        <v-container>
          <router-view
          :books="books"
          @add-book-list="addBooks"
          />
        </v-container>
      </v-main>
    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from '@/global/AppHeader'
import AppFooter from '@/global/AppFooter'
import firebase from '@/plugins/firebase'

// ===============================================
// 修正前 
// const STORAGE_KEY = 'books'

// 修正後
const BookList = 'books'
// =============================================
const database = firebase.database();
export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },
data(){
    return {
      books: [],
    }
  },
  mounted() {
    // 未修正
    // ローカルストレージにアイテムがあれば
    // if (localStorage.getItem(STORAGE_KEY)) {
    //   try {
    //     // JSON.parseで値を持ってきて、this.booksにデータを渡す
    //     this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
    //   } catch(e) {
    //     localStorage.removeItem(STORAGE_KEY);
    //   }
    // }
    // ローカルストレージにアイテムがあれば
    // if (localStorage.getItem(STORAGE_KEY)) {
    //   try {
    //     // JSON.parseで値を持ってきて、this.booksにデータを渡す
    //     this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
    //   } catch(e) {
    //     localStorage.removeItem(STORAGE_KEY);
    //   }
    // }
  },
  methods: {
    // =========================================================================
    // 修正前 ここから
    //   (e)で子コンポーネントからデータを受け取る
    // addBooks(e) {
      
    //   // 追加があればpushして
    //   this.books.push({
    //     id: this.books.length,
    //     // 子コンポーネント
    //     title: e.title,
    //     image: e.image,
    //     // 説明
    //     discription: e.discription,
    //     // 読んだ日、感想
    //     readDate: '',
    //     // メモ
    //     memo: '',
    //     learn: '',
    //     important: '',
    //     examples: '',
    //     different: '',
    //     userId: this.$store.state.userId,
    //   })
    //   ここまで
    // ==============================================================================
    addBooks(value) {
    
      // ==============================================================================
      // // 修正前のaddBook(e)から修正後のaddBook(value)にすると子コンポーネントからデータを受け取れない
      //   // 子コンポーネント
      //   title: e.title,
      //   image: e.image,
      //   discription: e.discription,
      // ==============================================================================


      // ==============================================================================
      // 現状のコード / Realtime Databeseにはオブジェクトで追加されている
      // ここから
      database.ref(BookList).push({
        title: '',
        image: '',
      //   // 説明
        discription: '',
        id: this.books.length,
        readDate: '',
        // メモ
        memo: '',
        learn: '',
        important: '',
        examples: '',
        different: '',
        userId: this.$store.state.userId,
      })
      console.log(value);
      // ここまで
      // ==============================================================================
      
      // this.saveBooksに保存する
      this.saveBooks();

      // 最新に追加したidの取得コード
      this.goToEditPage(this.books.slice(-1)[0].id)
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      const database = firebase.database();

      // localStorage.setItem(STORAGE_KEY, parsed);
      database().ref(BookList).push(parsed);
    },
    // 最新のid
    goToEditPage(id) {
      // ページの切り替え
      this.$router.push(`/edit/${id}`)
    },
  }
};
</script>  

<style>
@import "./assets/css/reset.css";
@import "./assets/css/style.css";


</style>
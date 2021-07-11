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
// const booksRef = firebase.database().ref('books')
// 修正後
const database = firebase.database();
const booksRef = 'books';
// =============================================
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
created() {
  // booksへの追加
  // child_added イベントは通常、データベースからアイテムのリストを取得
  booksRef.on('child_added', (snapshot) => {
    this.books.push(snapshot.val())
    this.books.id = snapshot.val();
  });
  // booksの変更
  booksRef.on('child_changed', (snapshot) => {
    this.books.update(snapshot.val())
  });
  // // booksの削除
  
  booksRef.on('child_removed', (snapshot) => {
    this.books.remove(snapshot.val())
  });
},
mounted() {
},
methods: {
  addBooks(e) {
    const bookData = {
      title: e.title,
      image: e.image,
      discription: e.discription,
      id: this.books.length,
      readDate: '',
      memo: '',
      learn: '',
      important: '',
      examples: '',
      different: '',
      userId: this.$store.state.userId,
      }
      database.ref(booksRef).push(bookData)
      .then(() => {
        console.log('成功');
      })
      .catch(() => {
        console.log('エラー');
      })
      
      
  // // this.saveBooksに保存する
  //   this.saveBooks();
  //   // 最新に追加したidの取得コード
  //   this.goToEditPage(this.books.id)
  //   // console.log(this.books.slice(-1)[0].id);
  },
  // 現状のコード / Realtime Databeseにはオブジェクトで追加されている
      // ここから
      // database.ref(BookList).push({
      //   title: '',
      //   image: '',
      // //   // 説明
      //   discription: '',
      //   id: this.books.length,
      //   readDate: '',
      //   // メモ
      //   memo: '',
      //   learn: '',
      //   important: '',
      //   examples: '',
      //   different: '',
      //   userId: this.$store.state.userId,
      // })
      // console.log(value);
      // ============================================================
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      // JavaScriptのオブジェクトや値を JSON 文字列に変換
      const parsed = JSON.stringify(this.books);
      // localStorage.setItem(STORAGE_KEY, parsed);
      firebase.database().set(booksRef, parsed)
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
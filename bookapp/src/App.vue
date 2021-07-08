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
const database = firebase.database();
const BookList = database.ref('books');
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
  BookList.on('child_added', (snapshot, prevChildKey) => {
    const newPost = snapshot.val();
    console.log('Author: ' + newPost.author);
    console.log('Title: ' + newPost.title);
    console.log('Previous Post ID: ' + prevChildKey);
  });

  // booksの変更
  BookList.on('child_changed', (snapshot) => {
    const changedPost = snapshot.val();
    console.log(changedPost);
  });

  // booksの削除
  const BookList = database.ref();
  
  BookList.on('child_removed', (snapshot) => {
    const deletedPost = snapshot.val();
    console.log(deletedPost);
  });

console.log(BookList);
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
  if (database.val(BookList)) {
    try {
      // JSON.parseで値を持ってきて、this.booksにデータを渡す
      // JSON.parse() 文字列を JSON として解析、
      // 文字列によって記述されている JavaScript の値やオブジェクトを構築
      this.books = JSON.parse(database.val(BookList));
    } catch(e) {
      database.remove(BookList);
    }
  }
},
methods: {
  // =========================================================================
  // 修正前 ここから
  //   (e)で子コンポーネントからデータを受け取る
  // addBooks(e) {
    
  // 追加があればpushして
    // this.books.push({
    //   id: this.books.length,
    //   // 子コンポーネント
    //   title: e.title,
    //   image: e.image,
    //   // 説明
    //   discription: e.discription,
    //   // 読んだ日、感想
    //   readDate: '',
    //   // メモ
    //   memo: '',
    //   learn: '',
    //   important: '',
    //   examples: '',
    //   different: '',
    //   userId: this.$store.state.userId,
    // })
    //   ここまで
    // ==============================================================================
    addBooks(value) {
    // ==============================================================================
    // 現状のコード / Realtime Databeseにはオブジェクトで追加されている
    // ここから
    database.ref(BookList).push({
      title: '',
      image: '',
      //説明
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
      this.goToEditPage(this.books.id)
      console.log(this.books.slice(-1)[0].id);
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      // JavaScriptのオブジェクトや値を JSON 文字列に変換
      const parsed = JSON.stringify(this.books);

      // localStorage.setItem(STORAGE_KEY, parsed);
      database.set(BookList, parsed)
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
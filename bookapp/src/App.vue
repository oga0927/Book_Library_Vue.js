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

const booksRef = firebase.database().ref('books')

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

  // booksRefの子要素がトリガーされ、this.books.push(snapshot.val())で
  // id: this.books.lengthが反応してidが追加される
  

// child_addedでsanpshot,keyとすると
// そのデータのキーが取得できるので、それをそのままidに
const getData =snapshot.val()

const bookAdd = {
  title: getData.title,
  image: getData.image,
  id: '',
  readDate: '',
  memo: '',
  learn: '',
  important: '',
  examples: '',
  different: '',
  userId: this.$store.state.userId,
}
bookAdd.id = snapshot.key
this.books.push(bookAdd)
console.log(bookAdd);
// this.books.push(this.bookAdd)


// this.books.push(this.bookAdd);



// this.goToEditPage(this.books.id)
});



  // this.booksの変更
booksRef.on('child_changed', (snapshot) => {
  this.books.update(snapshot.val())
});
  // // // this.booksの削除
  
  // booksRef.on('child_removed', (snapshot) => {
  //   this.books.remove(snapshot.val())
  // });
},
mounted() {
},
methods: {
  addBooks(e) {
    const bookData = {
      title: e.title,
      image: e.image,
      id: '',
      readDate: '',
      memo: '',
      learn: '',
      important: '',
      examples: '',
      different: '',
      userId: this.$store.state.userId,
      }
      booksRef.push(bookData)

  // this.saveBooksに保存する
    this.saveBooks();
    // 最後に追加したidの取得コード
    this.goToEditPage(this.books.id)
      .then(() => {
        console.log('成功');
      })
      .catch(() => {
        console.log('エラー');
      });
    // console.log(this.books.slice(-1)[0].id);
  },
      // ============================================================
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    // saveBooks() {
    //   // JavaScriptのオブジェクトや値を JSON 文字列に変換
    //   const parsed = JSON.stringify(this.books);
    //   // localStorage.setItem(STORAGE_KEY, parsed);
    //   booksRef.set(parsed)
    // },
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

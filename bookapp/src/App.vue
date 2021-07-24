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

const getData = snapshot.val();
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
// child_addedでsanpshot.keyとすると
// そのデータのキーが取得できるので、それをそのままidに
bookAdd.id = snapshot.key;
this.books.push(bookAdd);
});

// this.booksの変更
booksRef.on('child_changed', (snapshot) => {
  this.books.update(snapshot.val())
});

// this.booksの削除
booksRef.on('child_removed', (snapshot) => {
  this.books = this.books.filter((book) => book.id !== snapshot.key);
});
// booksRef.on('child_removed', (snapshot) => {
//   this.books.remove(snapshot.val());
// });
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
    booksRef.push(bookData);
    // 最後に追加したidの取得(追加した本の編集ページに遷移する)
    this.goToEditPage(this.books.slice(-1)[0].id);
  },
  // 最新のid
  goToEditPage(id) {
    // ページの切り替え
    this.$router.push(`/edit/${id}`).catch(() => {})
  },
  }
};

</script>  

<style>
@import "./assets/css/reset.css";
@import "./assets/css/style.css";
</style>

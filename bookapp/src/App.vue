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

// const getData = snapshot.val();
// const bookAdd = {
//   title: getData.title,
//   image: getData.image,
//   id: getData.id,
//   readDate: getData.readDate,
//   memo: getData.memo,
//   learn: getData.learn,
//   important: getData.important,
//   examples: getData.examples,
//   different: getData.different,
//   userId: this.$store.state.userId,
// }
const bookAdd = snapshot.val();
// child_addedでsanpshot.keyとすると
// そのデータのキーが取得できるので、それをそのままidに
bookAdd.id = snapshot.key;
this.books.push(bookAdd);
});

// this.booksの変更
booksRef.on('child_changed', (snapshot) => {
  snapshot.val();
});

// this.booksの削除
booksRef.on('child_removed', (snapshot) => {
  // this.booksのデータの書き換え。削除した本以外をbookに入れる
  // this.books.remove(snapshot.val());
  this.books = this.books.filter((book) => book.id !== snapshot.key);
});
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
  }
  },
};

</script>  

<style>
@import "./assets/css/reset.css";
@import "./assets/css/style.css";
</style>

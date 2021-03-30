<template>
  <v-app>
    <app-header/>

    <v-main>
      <!-- App.vueに入れることで自動でcontainerに割り当てられる -->
      <v-container>
        <router-view
        :books="books"
        @add-book-list="addBook"
        @update-book-info="updateBookInfo"
        @delete-local-storage="deleteLocalStorage"
        />
      </v-container>
    </v-main>
  <app-footer/>

  </v-app>
</template>

<script>
import AppHeader from '@/global/AppHeader'
import AppFooter from '@/global/AppFooter'
// import Home from '@/pages/Home.vue'
const STORAGE_KEY = 'books'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
    // Home
  },

  data(){
    return {
      books: [],
      newBook: null
    }
  },
  mounted() {
    // ローカルストレージにアイテムがあれば
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        // JSON.parseで値を持ってきて、this.booksにデータを渡す
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
      } catch(e) {
        localStorage.removeItem(STORAGE_KEY);
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
      })
      // this.saveBooksに保存する
      this.saveBooks();
      // 最後に追加したid取得コード
      // console.log(this.books.splice(-1)[0].id);

      // 最新のidが入った状態
      this.goToEditPage(this.books.slice(-1)[0].id)
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAGE_KEY, parsed);
    },
    updateBookInfo(e) {
      // book:[]の中身を置き換える処理
      const updateInfo = {
        id: e.id,
        readDate: e.readDate,
        memo: e.memo,
        title: this.books[e.id].title,
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
    },
    deleteLocalStorage() {
      // メッセージ:削除しますか？を追加
        const isDeleted = 'deleteLocalStorageのデータを削除してもいいですか？'
        if(window.confirm(isDeleted)) {
          // 2つ目の引数を空にすれば空のデータで上書きされる
          localStorage.setItem(STORAGE_KEY, '');
          // 完全に消える
          localStorage.removeItem(STORAGE_KEY);
          this.books = []
          // spliceなら this.books.splice(0, this.books.length)
          window.location.reload()
      }
    }
  }
};
</script>

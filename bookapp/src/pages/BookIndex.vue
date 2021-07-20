<template>
  <div>
    <v-row>
      <v-col cols="12" class="book__record">
        <span v-if="!$store.state.isAuthenticated">
          <p class="error-message">
            ※投稿するには
            <v-btn 
              small outlined 
              color="primary" 
              to="/login">
            ログイン
            </v-btn
            >
            または
            <v-btn 
              small outlined 
              color="error" 
              to="/register"
            >
            ユーザー登録
            </v-btn>
            が必要です
          </p>
        </span>
        <v-btn v-if="$store.state.isAuthenticated"
          to="/search" 
          block
          color="orange lighten-1"
          class="book__record"
        >
        読書記録を投稿
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col 
        cols="12" 
        sm="6" 
        v-for="(book, index) in books" 
        :key="index"
        class="mb-10"
      >
        <v-card class="mb-1">
          <v-row>
            <v-col cols="5">
              <!-- 画像が表示される -->
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col >
              <v-card-title class="book__title">{{ book.title }}</v-card-title>
              <v-spacer></v-spacer>
              <v-card-actions>
                <!-- 書き込み -->
                <v-btn 
                  :to="{name: 'BookEdit', params: {id: book.id}}"
                  color="primary"
                  class="mx-1"
                >
                投稿をみる
                </v-btn>
                
                <v-spacer></v-spacer>
                <div
                  v-if="book.userId === $store.state.userId"
                  >
                  <v-btn 
                    color="error"
                    @click="deleteLocalStorage(index)"
                  >
                  削除
                  </v-btn>
                </div>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
// // const STORAGE_KEY = 'books'
const booksRef = firebase.database().ref('books')
console.log(booksRef);

export default {
  props: {
    books: Array,
  },
  data() {
    return {
      // userId: false,
    }
  },
  methods: {
    // saveBooks() {
    //   const parsed = JSON.stringify(this.books);
    //   localStorage.setItem(STORAGE_KEY, parsed);
    // },
    deleteLocalStorage(index) {
      const isDeleted = 'データを削除してもいいですか？'
      if(window.confirm(isDeleted)) {
        this.books.splice(index, 1)
        this.deleteBook();
        console.log(this.deleteLocalStorage);
        // this.saveBooks();
        // this.books = []
        window.location.reload()
      }
    },
    deleteBook() {
      booksRef.child('book').remove()
      console.log('成功');
    }
  },
  
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>

<style scoped>
  .book__record {
    padding: 30px 40px 30px 20px;
    letter-spacing: 0.6rem;
  }
  .book__title {
    font-size: 0.8rem;
  }

@media (max-width: 576px) {
  .book__title {
    font-size: 0.8rem;
  }
}
</style>
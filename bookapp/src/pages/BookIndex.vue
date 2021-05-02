<template>
  <div>
    <v-row>
      <v-col cols="12">
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
          class="mx-auto"
        >
        おすすめの一冊を投稿
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" v-for="(book, index) in books" :key="index">
        <v-card  class="mb-8">
          <v-row>
            <v-col cols="5">
              <!-- 画像が表示される -->
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="7">
              <v-card-title >{{ book.title }}</v-card-title>
              <v-spacer></v-spacer>
              <v-card-actions>
                <!-- 書き込み -->
                <v-btn 
                  :to="{name: 'BookEdit', params: {id: index}}"
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
                    @click="deliteLocalStorage(index)"
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
const STORAGE_KEY = 'books'

export default {
  props: {
    books: Array,
  },
  data() {
    return {
      // userId: false,
      booklikes: [],
      count: 0,
      addClick: '',
    }
  },
  methods: {
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAGE_KEY, parsed);
    },
    deliteLocalStorage(index) {
      const isDeleted = 'データを削除してもいいですか？'
      if(window.confirm(isDeleted)) {
        this.books.splice(index, 1)
        this.saveBooks();
        this.books = []
        window.location.reload()
      }
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>
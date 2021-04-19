<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-btn 
          to="/search" 
          block
          color="orange lighten-1"
        >おすすめの一冊を投稿</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" v-for="(book, index) in books" :key="index">
        <v-card  class="mb-8">
          <v-row>
            <v-col cols="3">
              <!-- 画像が表示される -->
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="9">
              <v-card-title >{{ book.title }}</v-card-title>
              <!-- 読んだ日：{{book.readDate}}
              感想：{{book.memo}} -->
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
                <span v-if="!isAuthenticated">
                  <span></span>
                </span>
                <div
                  v-if="book.userId === $store.state.userId"
                  >
                  <v-btn 
                    color="error"
                    @click="deliteLocalStorage(index)"
                  >削除する
                  </v-btn>
                </div>

                <!-- いいねボタン -->
                  <v-btn
                    icon
                    color="pink"
                    @click="addCount(index)"
                  >
                  <v-icon>mdi-heart</v-icon>
                  {{ booklikes.counts }}
                  <!-- {{ $store.state.count }} -->
                </v-btn>
                
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
    addCount() {
      
      // this.booklikes.push({
      //   id: '',
      //   count: this.count ++
      // })
    },
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
    // booksのuserIdとログイン中のuserIdを比較して等しければボタンを表示
    // booksForPost: function() {
    //   return this.books.filter(function(book) {
    //     return books.userId === book.id
    //   }) 
    // },
    // booksForPost(books) {
    //   if(books.userId === this.$store.state.userId) {
    //     return 
    //   }
    // }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>

<style scoped>


</style>
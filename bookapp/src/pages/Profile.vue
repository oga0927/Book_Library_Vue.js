<template>
  <div>
    <p class="login__message"  v-if="getStateUserName">こんにちは！
      {{ getStateUserName }}さん
    </p>
    <p class="login__message" v-else>こんにちは！ゲストユーザーさん！</p>
    <p>
      <v-btn
        color="orange lighten-1"
        to="/search"
      >
      本を投稿する
      </v-btn>
    </p>
    <p>
      <!-- ゲストユーザーログイン時はアカウント削除を表示しない -->
      <v-btn v-if="!isGuestUser"
        color="error"
        class="delete-btn"
        @click="deleteUser"
      >
      アカウントを削除
      </v-btn>
    </p>
      <v-row>
        <v-col 
          cols="12" 
          sm="6" 
          v-for="(book, index) in books" 
          :key="index"
        >
        <!-- 自分が投稿した本の一覧 -->
        <!-- 投稿した本のuseIdとログイン中のuserIdが同じのを表示 -->
        <v-card  v-if="book.userId === $store.state.userId">
          <v-row>
            <v-col cols="4">
              <!-- 画像が表示される -->
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col>
              <v-card-title>{{ book.title }}</v-card-title>
              <v-spacer></v-spacer>
              <v-card-actions>
                <!-- 書き込み -->
                <v-btn 
                  :to="{name: 'BookEdit', params: {id: index}}"
                  color="primary"
                  class="mx-1"
                >
                編集する
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn 
                  color="error"
                  @click="deleteBook(book.id)"
                >
                削除
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

import firebase from '@/plugins/firebase'
const booksRef = firebase.database().ref('books')

export default {
  props: {
    books: Array,
  },
  name: 'Profile',
  data() {
    return {
      user: this.$store.getters.getStateUser,
      userName: ''
    }
  },
  methods: {
    deleteUser() {
      this.$store.dispatch("userDelete");
    },
    deleteBook(bookId) {
    // const isDeleted = 'データを削除してもいいですか？'
    // 削除前に確認
    // if(window.confirm(isDeleted)) {
      booksRef.child(bookId).remove();
      // window.location.reload();
    }
  },
  computed: {
    
    getStateUser() {
      return this.$store.getters.getStateUser;
    },
    getStateUserName() {
      return this.$store.getters.getUserName;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    isGuestUser() {
      return this.$store.getters.isGuestUser;
    },
  },

}

</script>

<style scoped>
  .row {
    margin: 12px;
  }
  .login__message {
    font-size: 1.5rem;
    padding: 20px;
  }

  @media (max-width: 576px) {
    .login__message {
      font-size: 1rem;
    }
  }
</style>
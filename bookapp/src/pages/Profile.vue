<template>
  <div>
    <v-row>
      <v-col cols="12">
        <p v-if="getStateUserName">こんにちは！
          {{ getStateUserName }}さん
          </p>
          <p v-else>こんにちは！ゲストユーザーさん</p>
          <p>
            <v-btn
              color="orange lighten-1"
              to="/search"
            >
            本を投稿する
            </v-btn>
          </p>
          <p>
            <v-btn
              
              color="error"
              class="delete-btn"
              @click="deleteUser"
            >
            アカウントを削除
            </v-btn
            >

          </p>
          <v-col cols="12" sm="6" v-for="(book, index) in books" :key="index">
            <v-card  class="mb-8">
              <v-row>
                <v-col cols="3">
                  <!-- 画像が表示される -->
                  <v-img :src="book.image"></v-img>
                    </v-col>
                    <v-col cols="9">
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
                        <span v-if="!isAuthenticated">
                          <span></span>
                        </span>
                        <span 
                          v-else-if="books.book.userId === $store.state.userId"
                          >
                          <v-btn 
                            color="error"
                            @click="deliteLocalStorage(index)"
                          >削除する
                          </v-btn>
                        </span>

                        <!-- いいねボタン -->
                          <!-- <v-btn
                            icon
                            color="pink"
                            @click="addCount(index)"
                          >
                      <v-icon>mdi-heart</v-icon>
                      {{ booklikes.counts }}
                      {{ $store.state.count }}
                    </v-btn> -->
                    
                </v-card-actions>
              </v-col>
            </v-row>
            </v-card>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>


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
    }
  },
}

</script>

<style scoped>

</style>
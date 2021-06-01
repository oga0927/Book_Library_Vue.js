<!-- drawerナビゲーション -->
    <!-- <v-navigation-drawer 
      app 
      v-model="drawer" 
      class="brown darken-4 hidden-md-and-up" 
      dark
    >
      <v-list class="mx-auto">
        <div v-if="!$store.state.isAuthenticated">
          <v-btn text to="/login">ログイン</v-btn>
          <v-btn
            text
            to="/register"
            class="register"
          >
            ユーザー登録
          </v-btn>
        </div>
        <div v-else>
          <p>
            <v-btn text to="/bookindex" dark>ホーム</v-btn>
          </p>
          <p>
            <v-btn text to ="/search" dark>投稿する</v-btn>
          </p>
          <p>
            <v-btn text to="/profile" dark>マイページ</v-btn>
          </p>
          <p>
            <v-btn text @click="logout">ログアウト</v-btn>
          </p>
        </div>
      </v-list>
    </v-navigation-drawer> -->
    <!-- ここまで -->

<script>
  export default {
    name: "Nav",
    data() {
      return {
        drawer: false
      }
    }
  }
</script>
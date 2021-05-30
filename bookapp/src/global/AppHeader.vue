<template>
  <span>
    <!-- drawerナビゲーション -->
    <v-navigation-drawer 
      app 
      v-model="drawer" 
      class="brown darken-4 hidden-md-and-up" 
      dark>
      <v-list class="mx-auto">
        <div v-if="!$store.state.isAuthenticated">
          
          <v-btn text to="/login">ログイン</v-btn>
          <v-btn
            text
            to="/register"
            class="register"
            >ユーザー登録</v-btn
            >
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
    </v-navigation-drawer>
    <!-- ここまで -->
    <v-app-bar app color="grey darken-4" dark>
      <v-icon class="hidden-lg-and-up" @click="drawer = !drawer">
      </v-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">
          {{ appTitle }}
        </v-toolbar-title>
      </router-link>
    
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div class="hidden-md-and-up">

        <!-- ヘッダーメニュー -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
      <div v-if="!$store.state.isAuthenticated" class="hidden-sm-and-down" >
        <v-btn text to="/login">ログイン</v-btn>
        <v-btn
          text
          to="/register"
          class="register"
        >
        ユーザー登録
        </v-btn>
      </div>
      <div v-else class="hidden-sm-and-down">
        <v-btn text to="/bookindex" dark>ホーム</v-btn>
          <v-btn text to="/search" dark>投稿する</v-btn>
          <v-btn text to="/profile" dark>マイページ</v-btn>
          <v-btn text @click="logout"
          >ログアウト</v-btn>
      </div>
    </v-app-bar>
  </span>
</template>

<script>
  export default {
  name: "AppHeader",
  data() {
    return {
      appTitle: "SHALIBO",
      drawer: false
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    }
  }
};
</script>

<style>

  .v-app-bar {
    left: 0px !important;
  }
</style>

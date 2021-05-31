<template>
  <span>
    <!-- ナビゲーション -->
    <v-navigation-drawer 
      v-model="drawer"
      absolute
      left
      temporary
      class="grey darken-4"
    >
      <v-list class="mx-auto">
        <div v-if="!$store.state.isAuthenticated">
          <v-btn class="white--text" text to="/login">ログイン</v-btn>
          <v-btn
            text
            to="/register"
            class="register white--text"
          >
            ユーザー登録
          </v-btn>
        </div>
        <div v-else>
          <p>
            <v-btn class="white--text" text to="/bookindex">ホーム</v-btn>
          </p>
          <p>
            <v-btn class="white--text" text to ="/search">投稿する</v-btn>
          </p>
          <p>
            <v-btn class="white--text" text to="/profile">マイページ</v-btn>
          </p>
          <p>
            <v-btn class="white--text" text @click="logout">ログアウト</v-btn>
          </p>
        </div>
      </v-list>
    </v-navigation-drawer>
    <!-- ここまで -->
    
    <v-app-bar 
      app 
      color="grey darken-4" 
      dark
      class="nav"
      absolute
      temporary
    >
      <v-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-icon>
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
      <div v-if="!$store.state.isAuthenticated" class="hidden-sm-and-down">
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
        <v-btn text to="/bookindex" >ホーム</v-btn>
          <v-btn text to="/search" >投稿する</v-btn>
          <v-btn text to="/profile" >マイページ</v-btn>
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
  /* .nav {
    position: fixed !important;
  } */
  /* .v-app-bar {
    left: 0px !important;
  } */

</style>


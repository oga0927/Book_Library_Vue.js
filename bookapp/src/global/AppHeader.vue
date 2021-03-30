<template>
  <span>
    <!-- drawerナビゲーション -->
    <v-navigation-drawer app v-model="drawer" class="brown darken-4" dark>
      <v-list>
        <div v-if="!isAuthenticated">
          <v-btn text to="/login">ログイン</v-btn>
          <v-btn
            text
            to="/register"
            class="register"
            >ユーザー登録</v-btn
            >
        </div>
        <div v-else>
          <v-btn text to="/profile">プロフィール</v-btn>
          <v-btn outlined color="gray" @click="logout"
            >ログアウト</v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="grey darken-4" dark>
      <v-icon class="hidden-md-and-up" @click="drawer = !drawer">
      </v-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">
          {{ appTitle }}
        </v-toolbar-title>
      </router-link>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div class="hidden-md-and-up">
        <!-- ハンバーガーメニュー -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- <v-btn text @click="drawer = !drawer">Menu</v-btn> -->
      </div>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn text to="/login">ログイン</v-btn>
        <v-btn
          text
          to="/register"
          class="register"
          >ユーザー登録</v-btn
        >
      </div>
      <div v-else class="hidden-sm-and-down">
        <v-btn 
          outlined color="gray" 
          @click="logout"
          >ログアウト</v-btn
        >
      </div>
    </v-app-bar>
    <v-img src="../assets/書籍MV.png"></v-img>
  </span>
</template>

<script>
  export default {
  name: "AppHeader",
  data() {
    return {
      appTitle: "ROGO",
      drawer: false
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    }
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.router-link-exact-active {
  color: white;
  text-decoration: none;
}
.v-toolbar__title {
  color: white;
  text-decoration: none;
}
</style>

<template>
    <v-navigation-drawer app v-model="drawer" class="brown darken-4" dark>
      <v-list>
        <div v-if="!isAuthenticated">
          <v-btn text to="/sign-in">ログイン</v-btn>
          <v-btn
            text
            to="/signup"
            class="nav-join"
            >ユーザー登録</v-btn
          >
        </div>
        <div v-else>
          <v-btn text to="/profile">プロフィール</v-btn>
          <v-btn outline color="gray" @click="logout"
            >ログアウト</v-btn
          >
        </div>
      </v-list>
    </v-navigation-drawer>
    </span>
</template>

<script>
export default {
  name: 'SideNav',
  data () {
    return {
      drawer: false,
      items: [
        { title: '連絡先一覧', icon: 'list' }
      ]
    }
  }
}
</script>
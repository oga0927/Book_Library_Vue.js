<template>
  <div>
    <h1>ログアウト</h1>
    <v-btn @click="logout">ログアウト</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name :'LogOut',
  methods: {
    logout() {
      firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.replace('login')
      });
    }
  }
}
</script>

<style>

</style>
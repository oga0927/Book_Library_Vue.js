<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar app dark color="blue">
      <v-toolebar-title>
        <div class="logo" @click="logoClick">Logo</div>
      </v-toolebar-title>

      <v-spacer></v-spacer>
      <v-btn text>ログイン</v-btn>
      <v-btn text>ユーザー登録</v-btn>
      
    </v-app-bar>
      
      <!-- <v-btn 
      color="error"
      @click="deleteLocalStorage"
      >削除する</v-btn> -->
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    deleteLocalStorage() {
      this.$emit('delete-local-storage')
    }
  }
}
</script>

<style scoped>
  /* .logo {
    width: 100px;
    margin-left: 40px;
  cursor: pointer;
  height: 60px;
  line-height: 60px;
    font-size: 1.8rem;

  } */
</style>


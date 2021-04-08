<template>
  <div>
    <v-row>
      <v-col cols="12">
        <p v-if="getStateUserName">こんにちは！
          {{ getStateUserName }}さん
          </p>
          <p v-else>こんにちは！ゲストユーザーさん</p>
          <v-btn
            color="primary"
            to="/search"
          >
          本を投稿する
          </v-btn
          >
          <v-btn
            color="error"
            class="delete-btn"
            @click="deleteUser"
          >
          アカウントを削除
          </v-btn
          >
          <v-col cols=""></v-col>
          <!-- useridとbookidの紐付け -->
          <!-- v-forで画像の表示 -->
          
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      user: this.$store.getters.getStateUser,
      userName: ''
    }
  },
  computed: {
    getStateUser() {
      return this.$store.getters.getStateUser;
    },
    getStateUserName() {
      return this.$store.getters.getUserName;
    }
  },
  methods: {
    deleteUser() {
      this.$store.dispatch("userDelete");
    }
  },
}

</script>

<style scoped>

</style>
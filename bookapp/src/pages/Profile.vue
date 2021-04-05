<template>
  <div>
    <v-row>
      <v-col cols="12">
        <!-- <span v-if="getStateUser.user.displayName">
          {{ getStateUser.user.displayName }}
          </span>
          <span v-else>ログインユーザー</span> -->
          <v-btn
          color="error"
          class="delete-btn"
          @click="deleteUser"
          >
          アカウントを削除
          </v-btn
          >
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
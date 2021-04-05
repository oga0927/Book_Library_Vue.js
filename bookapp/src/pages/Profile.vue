<template>
  <div>
    <v-row>
      <v-col cols="12">
        <span v-if="getStateUser.user.displayName">
          {{ getStateUser.user.displayName }}
          </span>
          <span v-else>ログインユーザー</span>
          <v-btn
          text
          color="error"
          @click="deleteUser">
          アカウントを削除
          </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'Profile'
}

</script>

<style scoped>

</style>
<template>
  <v-form>
    <v-main>
      <v-card width="500" class="mx-auto mt-5">
        <v-card-title>ユーザー登録フォーム</v-card-title>
        <v-card-text>
          <v-text-field label="ユーザー名" prepend-icon="mdi-account-circle"/>
          <v-text-field
            label="パスワード" 
            required
            :type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <!-- <v-btn color="success">ログイン</v-btn> -->
          <v-btn color="info">登録</v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-form>
</template>



<script>
export default {
  name: 'Register',
  data() {
    return {
      showPassword: false
    }
  }
}
</script>

<style>

</style>
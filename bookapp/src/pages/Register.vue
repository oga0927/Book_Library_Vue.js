<template>
  <v-form>
    <v-content>
      <v-card width="500" class="mx-auto mt-5">
        <v-card-title>ログインフォーム</v-card-title>
        <v-card-text>
          <v-text-field label="ユーザー名" prepend-icon="mdi-account-circle"/>
          <v-text-field 
            placeholder="パスワードは6文字以上必要です"
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
          <v-btn color="info">ユーザー登録</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-form>
</template>

<script>
export default {
  name: 'LogUp',
  data() {
    return {
      showPassword: false
    }
  }
}
</script>

<style>

</style>
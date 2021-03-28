<template>
  <v-form>
    <v-main>
      <v-card width="500" class="mx-auto mt-5">
        <v-card-title>ユーザー登録フォーム</v-card-title>
        <v-card-text>
          <v-text-field 
            name="username"
            label="username"
            type="text"
            v-model="username" 
            prepend-icon="mdi-account-circle"
            required/>

          <v-text-field
            name="email"
            label="E-mail"
            type="email"
            v-model="email"
            :rules="emailRules"
            prepend-icon="mdi-email"
            required/>
            
          <v-text-field
            name="pasword"
            label="password" 
            v-model="password"
            :rules="passwordRules"
            required
            :type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <!-- <v-btn color="success">ログイン</v-btn> -->
          <v-btn text @click="$refs.form.reset()"></v-btn>
          <v-spacer></v-spacer>
          <v-btn 
          color="info"
          :loading="isloading" 
          despressed 
          @click="register">登録</v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-form>
</template>



<script>
import firebase from 'firebase'
export default {
  name: 'Register',
  data() {
    return {
      valid: false,
      showPassword: false,
      username: "",
      email: "",
      password: "",
      emailRules: [
        v => !!v || "メールアドレスを入力してください",
        v => /.+@.+/.test(v) || "正しいメールアドレスを入力してください"
      ],
      passwordRules: [
        v => !!v || "パスワードを入力してください",
        v => v.length >= 8 || "パスワードは8文字以上で入力してください"
      ]
    }
  },
  methods: {
    // register() {
      // },
    register() {
      this.$router.replace('/')
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('成功しました');
      },
      function(err) {
        alert('失敗しました' + err.message);
      });
    }
  }
}
</script>

<style>

</style>
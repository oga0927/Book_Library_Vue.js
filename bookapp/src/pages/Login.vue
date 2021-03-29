<template>
  <v-form ref="form" v-model="valid">
    <v-main>
      <v-card width="500" class="mx-auto mt-5">
        <v-toolbar dark color="primary">
        <v-card-title>ログインフォーム</v-card-title>
        </v-toolbar>
        <v-card-text>
          
          <v-text-field
            name="email"
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            prepend-icon="mdi-email"
            required
            data-cy="loginEmailField" />

          <v-text-field
            name="password"
            label="Password" 
            :type="showPassword ? 'text' : 'password'" 
            v-model="password"
            :rules="passwordRules"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            data-cy="loginPasswordField"
            required/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
              color="info"
              @click="submit"
              :disabled="!valid"
              data-cy="loginSubmitBtn"
            >ログイン</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-main>
  </v-form>
</template>



<script>
// import firebase from 'firebase'
export default {
  name: 'LogIn',
  
  data() {
    return {
      valid: false,
      showPassword: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || "メールアドレスを入力してください",
        v => /.+@.+/.test(v) || "正しいメールアドレスを入力してください"
      ],
      passwordRules: [
        v => !!v || "パスワードを入力してください",
        v => v.length >= 6 || "パスワードは6文字以上で入力してください"
      ]
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
      this.$store.dispatch("userLogin", {
        email: this.email,
        password: this.password
        });
      }
    },
  },
}
</script>

<style>

</style>
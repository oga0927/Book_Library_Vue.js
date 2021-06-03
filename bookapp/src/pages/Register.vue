<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-main>
      <v-card width="500" class="mx-auto mt-5">
        <v-toolbar dark color="primary">
        <v-card-title>ユーザー登録</v-card-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            name="username"
            label="UserName"
            type="text"
            v-model="userName"
            prepend-icon="mdi-account"
            required
            data-cy="userNameField"
          />
          <v-text-field
            name="email"
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            prepend-icon="mdi-email"
            required
            data-cy="registerEmailField"
          />
          <v-text-field
            name="password"
            label="Password" 
            :type="showPassword ? 'text' : 'password'" 
            v-model="password"
            :rules="passwordRules"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            data-cy="registerPasswordField"
            required
          />
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          
          <p  class="account__message" mr-4 >既にアカウントをお持ちですか？<br>
            <router-link to="/login">ログインはこちらから</router-link>
          </p>
          <v-spacer></v-spacer>
          <v-btn 
            color="error"
            @click="submit"
            :disabled="!valid"
            data-cy="registerSubmitBtn"
          >登録
          </v-btn>
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
      valid: false,
      showPassword: false,
      userName: '',
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
      this.$store.dispatch("userRegister", {
        userName: this.userName,
        email: this.email,
        password: this.password
        });
      }
    },
  },
}
</script>

<style scoped>

.v-card__actions {
  margin-bottom: 30px;
}

@media (max-width: 576px) {
  .account__message {
    font-size: 0.9rem;
  }
}


</style>
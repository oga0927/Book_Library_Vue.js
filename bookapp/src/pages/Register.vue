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
            label="Email"
            type="email"
            v-model="email"
            prepend-icon="mdi-email"
            required/>
            
          <v-text-field
            name="pasword"
            label="password" 
            v-model="password"
            
            required
            :type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <!-- <v-btn color="success">ログイン</v-btn> -->
          <v-btn 
          color="info"
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
      username: '',
      email: '',
      password: '',
      showPassword: false
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
      .then(function() {
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
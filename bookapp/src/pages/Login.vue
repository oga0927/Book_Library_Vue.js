<template>
  <v-form>
    <v-main>
      <v-card width="500" class="mx-auto mt-5">
        <v-card-title>ログインフォーム</v-card-title>
        <v-card-text>
          
          <v-text-field
            name="email"
            label="Email"
            type="email"
            v-model="email"
            prepend-icon="mdi-email"
            required />

          <v-text-field
            label="Password" 
            :type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            required/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <!-- <v-btn color="success">ログイン</v-btn> -->
          <v-btn 
          color="info"
          @click="login">ログイン</v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-form>
</template>



<script>
import firebase from 'firebase'
export default {
  name: 'LogIn',
  
  data() {
    return {
      email: '',
      password: '',
      showPassword: false
    }
  },
  computed: {
    
  },
  methods: {
    
    login() {
      this.$router.replace('/')
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(
        function() {
          alert('ログイン成功')
        },
        function(err) {
          alert('あー残念！！' + err.message);
        })
    },
  },
}
</script>

<style>

</style>
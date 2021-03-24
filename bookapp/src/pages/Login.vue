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
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            required />

          <v-text-field
            label="Password" 
            :type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
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
// import { validationMixin } from 'vuelidate'
// import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'LogIn',
  // mixins: [validationMixin],

  // validations: {
  //   email: { required, email },
  //   password: { required, maxLength: maxLength(10) },
      
      
  //     },

  data() {
    return {
      email: '',
      password: '',
      showPassword: false
    }
  },
  computed: {
    // emailErrors () {
    //   const errors = []
    //   if (!this.$v.email.$dirty) return errors
    //   !this.$v.email.email && errors.push('Must be valid e-mail')
    //   !this.$v.email.required && errors.push('E-mail is required')
    //   return errors
    // },
    // passwordErrors () {
    //   const errors = []
    //   if (!this.$v.password.$dirty) return errors
    //   !this.$v.password.email && errors.push('Must be valid password')
    //   !this.$v.password.required && errors.push('password is required')
    //   return errors
    // },
  },
  methods: {
    // submit() {
    //     this.$v.$touch()
    // },
    // clear () {
    //     this.$v.$reset()
    //     this.email = ''
    //     this.password = ''
    //   },
    login() {
      this.$router.replace('/')
    },
  },
}
</script>

<style>

</style>
<template>
<v-footer 
  padless 
  class="footer"
>
    <v-col
      class="text-center"
      cols="12"
    >
      ©︎{{ new Date().getFullYear() }} — youichi ogasawara
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style>
  .footer {
    margin-bottom: -5vh !important;
    height: 80px;
  }

@media (max-width: 576px) {
.footer {
  margin-bottom: -55vh !important;
  }
}
</style>
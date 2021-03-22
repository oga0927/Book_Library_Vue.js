<template>
  <div>
    <v-btn 
      color="error"
      @click="deleteLocalStorage"
      >削除する</v-btn>
  </div>
</template>

<script>
export default {
  name: 'DeleteButton',
  methods: {
    deleteLocalStorage() {
      this.$emit('delete-local-storage')
    }
  }
}
</script>

<style>

</style>
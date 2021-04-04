<template>
  <span>
    <book-edit></book-edit>
    <book-index></book-index>
    <book-search></book-search>
  </span>
</template>

<script>
import BookEdit from './BookEdit'
import BookIndex from './BookIndex'
import BookSearch from './BookSearch'

export default {
  name: 'Home',
  components: {
    BookEdit,
    BookIndex,
    BookSearch
  }
}
</script>

<style>

</style>
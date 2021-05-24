<template>
  <section class="home">
    <v-container fluid fill-height class="home">
      <v-row>
        <v-col class="home">
          <h1  class="brown--text darken-4 display-3 font-weight-bold">SHALIBO</h1>
          <p class="book_discription">知識として定着させよう</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
  
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.container {
  padding: 0px;
}
.v-main {
  flex: 0 auto;
  padding: 56px 0 0 0 !important;
}

.logo_title {
  text-align: center;
  font-size: 40px;
}

.book_discription {
  text-align: center;
}

@media screen {
  .container {
    max-width: 100%;
  }
}

</style>
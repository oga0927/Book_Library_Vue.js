<template>
  <section class="home">
    <v-container fluid fill-height class="home">
      <v-row>
        <v-col class="home">
          <div class="content">
            <div class="sub_title font-weight-black white--text text-center description">
              本の知識を自分のものに
            </div>
            <!-- <div class="white--text text-center description">
              本の知識を自分のものに
            </div> -->
            <div class="font-weight-black white--text text-center description">
              「読書管理SHALIBO」
            </div>
          </div>
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

.content {
    padding: 50px 0;
    margin: 0 auto;
    text-align: center;
    letter-spacing: 0.1rem;
  }

.sub_title {
  font-size: 30px;
}
/* 
.book_discription {
  text-align: center;
} */

@media screen {
  .container {
    max-width: 100%;
  }
}

</style>
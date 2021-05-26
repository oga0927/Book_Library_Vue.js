<template>
  <section class="home">
    <v-container fluid fill-height class="home">
      <v-layout>
        <div class="content">
          <div class="sub_title font-weight-black deep-orange--text text--accent-4 text-center description">
            本の知識を自分のものに
          </div>
          <div class="font-weight-black deep-orange--text text--accent-4 text-center description">
            「読書管理SHALIBO」
          </div>
          <v-btn color="primary" dark to="/bookindex">本を投稿する</v-btn>
        </div>
      </v-layout>
    </v-container>
    <v-main>
      <div class="discription">
        <h2>SHALIBOとは</h2>
        <h4>SHALIBOは読書した内容を記録したり、読んだ本で学んだことを質問に答えてアウトプットできます。<br>
        本で得た知識を投稿して自分のものにしましょう！
        </h4>
      </div>
    </v-main>
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
  padding: 56px 0 250px 0 !important;
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

.discription {
  width: 100%;
  color: #232323;
  font-size: 1rem;
  line-height: 35px;
  letter-spacing: 0.1rem;
  text-align: center;
  /* background-color: rgba(219, 197, 152, 0.5) */
}

/* .discription p {
  padding: 4px;
  font-weight: bold;
} */

@media screen {
  .container {
    max-width: 100%;
  }
}

</style>
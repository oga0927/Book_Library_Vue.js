<template>
  <section class="home">
    <v-container fluid fill-height class="home">
      <v-layout>
        <!-- <div class="title">
          <div class="content">
            <div class="sub_title font-weight-black deep-orange--text text--accent-4 text-center description">
              本の知識を自分のものに
            </div>
            <div class="font-weight-black deep-orange--text text--accent-4 text-center description">
              「読書管理SHALIBO」
            </div>
          </div>

        </div> -->
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
  padding: 56px 0 500px 0 !important;
}

.title {
  width: 50%;
  height: 20%;
  padding-top: 30px;
  text-align: center;
  position:absolute;
  top: 15%;
  left:25%;
  background-color: rgba(255, 255, 255, .5);
}

.top_message {
  width: 100%;
  color: #232323;
  font-size: 1rem;
  line-height: 35px;
  letter-spacing: 0.1rem;
  text-align: center;
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
}

.function-list{
  display: flex;
  margin-top: 50px;
}
.function{
  width: 30%;
  margin: 0 30px;
}
.function-title{
  border: solid 3px orange;
  padding: 0.5em;
  border-radius: 0.5em;
}
.benefit{
  width: 100%;
  height: 350px;
  padding: 48px 0px;
  text-align: center;
  background-color: #edf2f5;
}

@media screen {
  .container {
    max-width: 100%;
  }
}

</style>
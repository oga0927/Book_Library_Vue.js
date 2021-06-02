<template>
  <section class="home">
    <v-container class="home"></v-container>
    <v-main>
      <div class="discription">
        <h2>SHALIBOとは</h2>
        <h4>SHALIBOは読書した内容を記録したり、読んだ本で学んだことを質問に答えてアウトプットできます。<br>
        本で得た知識を投稿して自分のものに！
        </h4>
      </div>
      <div class="features">
        <h2>SHALIBOの特徴</h2>
        <div class="features_list">
          <div class="contents">
            <p class="contents_title">アウトプット機能</p>
            <div class="contents_discription">
              <p>読み終えたら、読書した内容を質問テンプレートに沿って記録することができます。</p>
            </div>
          </div>
          <div class="contents">
            <p class="contents_title">投稿記録</p>
            <div class="contents_discription">
              <p>読書した本の内容を記録。投稿した本はマイページに保存が残ります。</p>
            </div>
          </div>
          <div class="contents">
            <p class="contents_title">編集機能</p>
            <div class="contents_discription">
              <p>コメント編集で文字の付け足しや、削除ができます。</p>
            </div>
          </div>
        </div>
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
/* .v-main {
  flex: 0 auto;
  padding: 56px 0 520px 0 !important;
} */

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

.features{
  width: 100%;
  height: 350px;
  margin: 50px 0 0 0;
  padding: 48px 0 0 0;
  text-align: center;
  background-color: #f0e8df;
}

.features_list{
  display: flex;
  margin-top: 50px;
}
.contents{
  width: 30%;
  margin: 0 30px;
}
.contents_title{
  border: solid 3px orange;
  padding: 0.5em;
  border-radius: 0.5em;
}

@media screen {
  .container {
    max-width: 100%;
  }
}

</style>
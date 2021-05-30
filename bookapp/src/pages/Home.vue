<template>
  <section class="home">
    <v-container fluid fill-height class="home"></v-container>
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
              <p>読んだ本の内容を質問に答えてアウトプットしてみてください</p>
            </div>
          </div>
          <div class="contents">
            <p class="contents_title">読書内容を記録</p>
            <div class="contents_discription">
              <p>読み終えたら、読書した内容を質問テンプレートに沿って記録してみてください</p>
            </div>
          </div>
          <div class="contents">
            <p class="contents_title">読書内容を記録</p>
            <div class="contents_discription">
              <p>読み終えたら、読書した内容を質問テンプレートに沿って記録してみてください</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="features">
        <h2>Recalで できること</h2>
        <div class="function-list">
          <div class="function">
            <p class="function-title">食事内容を記録</p>
            <div class="function-description">
            <p>朝食、昼食、夕食の内容を記録できます。是非毎日の食事内容を記録して栄養のバランスを考えるキッカケにしてみてください。</p>
          </div>
        </div>
          <div class="function">
            <p class="function-title">レシピを検索</p>
            <div class="function-description">
              <p>レシピの検索ができます。何を作ろうか迷った時にはピックアップメニューをチェック！</p>
            </div>
          </div>
          <div class="function">
            <p class="function-title">飲食店を検索</p>
            <div class="function-description">
              <p>外食をしようと思った時には飲食店を検索！目的の地域とフリーワードを入力して行きたいお店を探してみてください。
              </p>
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
  background-color: #f0e8df;
}

@media screen {
  .container {
    max-width: 100%;
  }
}

</style>
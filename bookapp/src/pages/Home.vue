<template>
  <section class="home">
    <v-container class="home"></v-container>
    <v-main>
      <div class="discription">
        <h2>SHALIBOとは</h2>
        <p>SHALIBOは読書した内容を記録したり、読んだ本で学んだことを質問に答えてアウトプットできます。<br>
        本で得た知識を投稿して自分のものに！
        </p>
      </div>
      <div class="features">
        <h2>SHALIBOの特徴</h2>
        <div class="features__list">
          <div class="contents">
            <p class="contents__title">アウトプット機能</p>
            <div class="contents__discription">
              <p>読み終えたら、読書した内容を質問テンプレートに沿って記録することができます。</p>
            </div>
          </div>
          <div class="contents">
            <p class="contents__title">投稿記録</p>
            <div class="contents_discription">
              <p>読書した本の内容を記録。投稿した本はマイページに保存が残ります。</p>
            </div>
          </div>
          <div class="contents">
            <p class="contents__title">編集機能</p>
            <div class="contents__discription">
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

<style lang="scss">



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

.top__message {
  width: 100%;
  color: #232323;
  font-size: 1rem;
  line-height: 35px;
  letter-spacing: 0.1rem;
  text-align: center;
}

.sub__title {
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

  &__list {
    display: flex;
    margin-top: 50px;
  }
}

.contents{
  width: 30%;
  margin: 0 30px;

  &__title {
    border: solid 3px orange;
    padding: 0.5em;
    border-radius: 0.5em;
  }
}


@media (max-with: 576px) {
  .features__list {
    flex-direction: column;
  }
  .discription {
    p {
      font-size: 0.5rem;
    }
  }
}

</style>
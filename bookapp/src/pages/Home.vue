<template>
  <section>
    <v-container class="home"></v-container>
    <v-main>
      <div class="discription">
        <h2>SHALIBOとは</h2>
        <p class="discription__comment">
          読書した内容を 1 ページにまとめるシンプルな「読書記録アプリ」です。<br>
          本の内容をWEB 上で投稿・管理し、他のユーザーと知識を共有し合うことで、<br>
          同じ本を要約することに時間をかけずに、まだ要約されていない書籍に専念することができます。<br>
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
            <div class="contents__discription">
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

<style scoped>

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
  height: 150px;
  color: #232323;
  font-size: 1rem;
  line-height: 35px;
  letter-spacing: 0.1rem;
  text-align: center;
}

.discription__comment {
  font-size: 1rem;
}

.features{
  width: 100%;
  height: 360px;
  margin: 50px 0 0 0;
  padding: 48px 0 0 0;
  text-align: center;
  background-color: #f0e8df;

}
.features__list {
  display: flex;
  margin-top: 50px;
}

.contents{
  width: 30%;
  margin: 0 30px;

}
.contents__title {
  border: solid 3px orange;
  padding: 0.5em;
  border-radius: 0.5em;
}


@media (max-width: 576px) {
  .features {
    width: 100%;
    height: 550px;
  }
  .features__list {
    flex-direction: column;
    width: 100%;
  }
  .contents{
    width: 80%;
    margin: 0 auto;
}
  .contents__discription {
    font-size: 0.8rem;
    margin-bottom: 30px;
  }
  .discription__comment {
  font-size: 0.8rem;
  padding: 10px;
  line-height: 20px;
}
};

/* @media (min-width: px) {
  .home {
  background: url("~@/assets/mv.png");
  background-blend-mode: lighten;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 55vh;
  }
} */

</style>
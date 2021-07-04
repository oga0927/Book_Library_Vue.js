![トップページ.jpg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/1b7f1a91-49c0-c6a5-4656-5b181e27a81f.jpeg)

## 制作背景

「どんなアプリなのか？」<br>
読書した内容を 1 ページにまとめるシンプルな「読書記録アプリ」です。<br>
本の内容を紙 1 ページに要約する方も多いと思います。しかし、紙だと編集ができず作り直すことも多いです。
そこで、紙ではなく WEB 上で投稿・管理し、他のユーザーと知識を共有し合えるサービスを制作しました。
「他のユーザーの要約をみたい」欲求を解決しました。また、同じ本を要約することに時間をかけずに、まだ要約されていない書籍に専念することができます。<br>
・検索、記録、保存の 3 ステップ<br>
・読んだ本の内容を質問に答えてアウトプット<br>
・マイページでいつでも振り返り可能<br>
<br>
<br>

## URL

- https://shalibo.netlify.app/
- ゲストログインボタンで簡単にログインできます。

Qiita にも執筆しました。
[Vue.js、FireBase で読書管理アプリを作ってみた](https://qiita.com/oga0927/items/abf48b692b11fec6ae36)
<br>
<br>

## ER 図

![Untitled Diagram (1).png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/646313e3-2a27-62f9-7063-3b13a03757d1.png)
<br>
<br>

## インフラ構成図

![Untitled Diagram (1).png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/8e3abb13-2242-5fa6-5671-cd9bf2b2fa47.png)
<br>
<br>

## 使用技術

- Vue 2.6.12
- VueCLI 4.5.13
- VueRouter
- Vuex 3.6.2
- Vuetify 2.4.7
- JavaScript
- CSS
- GoogleBooksAPI
- WEB サーバー: Netlify
- DB: WebStorage(LocalStorage)
- DB(認証のみ): Firebase(Authentication)

## 機能一覧

|      | 　　　　　　 機能　 　　　　 　　 |
| :--- | :-------------------------------- |
| １   | アカウント登録機能 　             |
| ２   | アカウント削除機能 　             |
| ３   | ログイン機能 　　　　　　         |
| ４   | ゲストユーザーログイン機能 　　   |
| ５   | ログアウト機能　　　　　　　　    |
| ６   | 本の検索機能 　                   |
| ７   | 本の登録機能(CRUD) 　             |
| ８   | 投稿内容編集機能(CRUD)            |
| ９   | コメント機能(Ajax)                |
| １０ | 本の詳細一覧機能 　               |
| １１ | マイページ機能                    |

## ポートフォリオの URL

GitHub: https://github.com/oga0927/Book_Library_Vue.js
URL: https://shalibo.netlify.app

UserName: test
E-mail: shalibo@test.com
Password: password
ゲストログイン付き

# 何ができるのか

### 1. ユーザー登録

ヘッダーのユーザー登録を押して、フォームに UserName、Email、Password を入力して登録。
(ユーザーネームを入力しない場合はゲストログイン名として表示されます)

### 2. ログイン

アカウント登録済みの場合はフォームに Email と Password を入力してログイン。

### 3. トップページ

最初にアクセスするとトップページの画面が描画されます。ヘッダーにログイン、
ユーザー登録を配置して、router-link でフォームを描画しています。

### 4. ユーザー認証

・ユーザー登録と同時にユーザー情報を firebase の Authentication に保存しています。
・ログインするとヘッダーにホーム、投稿する、マイページ、ログアウトのボタンが表示されます。
・firebase の Authentication から userid を取得し、store に格納、state から userid を呼び出し、
投稿するときに LocalStorage の userid と紐づけて v-for で一覧表示。
・トップページでは投稿した本の一覧画面が描画されます。v-if で認証状態を判別し、
『おすすめの一冊を投稿ボタン』を表示させています。

![ユーザー登録.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/ef6d14d2-d6b2-606a-3315-1b4e4b9e0bb1.gif)

###5. 検索

- 『 おすすめの一冊を投稿 』ボタンを押すと本の検索画面に遷移します。
- 本のキーワードを入力して検索ボタンを押すと、非同期処理で GoogleBooksAPI からキーワードと一致した本を取得します。
- 最大４０件表示され、検索結果から投稿したい本を選択できます。

![検索.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/f5e2f37e-ffcf-6fa8-da38-e85e4f79fe3e.gif)

### 6. 本の投稿

- 本の【＋ボタン】を押すと『読んだ日付』、『この本にはどんな情報が書かれているか』、『自分はこの本から何を学んだか』、『この本がなぜ重要なのか』、『テーマに対しどのような事例を出しているか』、『この本が他の本と似ている所、違う要素は何か』を入力して投稿ボタンを押すと投稿できます。
- 投稿した本は、他のユーザーが書き込めないようにログイン中の userid と localstorage の userid と紐づいた本のみ削除と投稿ボタンの表示させています。
- 投稿した本の削除ボタンを押すと、アラートでメッセージが表示され、OK ボタンを押すと localstorage から該当する本のデータが削除されます。
- ログイン中は LocalStorage の userid と firebase の userid と紐づいている本のみ削除ボタンが表示。
- ヘッダーのロゴ（SHALIBO）を押すとトップページへリダイレクト。

![投稿.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/493c0af7-936d-5de4-f67c-4e8cfc510bbf.gif)

###7. 投稿した本、アカウント削除

- 投稿した本の一覧を表示。
- 編集ボタンで投稿した本の内容を修正。
- 削除ボタンを押すと LocalStorage に保存されているデータが削除され、トップページ、マイページからも削除されます。
- アカウント削除ボタンをクリックすると、firebase の Authentication から userid が削除されます。

![アカウント削除.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/2ce207e3-d8af-073a-1d51-c6a3d4e857a3.gif)

### 8. レスポンシブ対応

- Vuetify を使用してスマートフォンからでも使用可能
- デバイスによってハンバーガーメニューを実装

###9. 工夫したところ（UI/UX）
① メインビューの配色には暖色をメインに作成。
② 探す → アウトプット → 保存のシンプルな設計。
③ ファーストビューは一眼でわかる画像と、何をするアプリなのかが伝わるように作成。
④ フォームにバリデーションを実装
・目のマークをクリックで入力したパスワードを確認。
・登録済みのアドレスはアラートでお知らせ

![バリデーション.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/cc19ad3a-bbd9-35f6-fb06-28be8d2ef003.gif)

```Vue.js
<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-main>
      <v-card width="500" class="mx-auto mt-5">
        <v-toolbar dark color="primary">
        <v-card-title>ユーザー登録</v-card-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            name="username"
            label="UserName"
            type="text"
            v-model="userName"
            prepend-icon="mdi-account"
            required
            data-cy="userNameField"
          />
          <v-text-field
            name="email"
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            prepend-icon="mdi-email"
            required
            data-cy="registerEmailField"
          />
          <v-text-field
            name="password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            :rules="passwordRules"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            data-cy="registerPasswordField"
            required
          />
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <p mr-4>既にアカウントをお持ちですか？
            <router-link to="/login">ログインはこちらから</router-link>
          </p>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            @click="submit"
            :disabled="!valid"
            data-cy="registerSubmitBtn"
          >登録</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-main>
  </v-form>
</template>


<script>
export default {
  name: 'Register',

  data() {
    return {
      valid: false,
      showPassword: false,
      userName: '',
      email: '',
      password: '',
      emailRules: [
        v => !!v || "メールアドレスを入力してください",
        v => /.+@.+/.test(v) || "正しいメールアドレスを入力してください"
      ],
      passwordRules: [
        v => !!v || "パスワードを入力してください",
        v => v.length >= 6 || "パスワードは6文字以上で入力してください"
      ]
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
      this.$store.dispatch("userRegister", {
        userName: this.userName,
        email: this.email,
        password: this.password
        });
      }
    },
  },
}
</script>

<style scoped>
  p a{
    text-decoration: none;
  }
</style>
```

####⑤ 質問テンプレートについて
・読んだ本が記憶に残る読書術、読書ビジュアライジング法をアプリに取り入れました。
（本来は質問事項がもっと多い、一部抜粋）
![質問内容.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/9b5eb1c0-81fd-ef23-050f-994884bf4cc7.png)

<br><br>

###10. 工夫したところ（実装面）

####① データの永続化
・再描画で LocalStorage のデータが初期化されないよう設定
・vuex-persistedstate をインストールで、vuex の state の中身を維持
・vuex-persistedstate の設定を vuex の Store の plugins に設定
<br>

```store.js

import createPersistedState from 'vuex-persistedstate';


export default new Vuex.Store({

  },
  state: {

  },
  mutations: {

  },
  actions: {

  },

  getters: {

  },
  plugins: [
    createPersistedState({
　　　 key: 'example',
    　storage: window.sessionStorage
  })]

});
```

#### ② マイページでユーザー名の表示、本の編集、削除

・アカウント登録時に設定したユーザー名が表示され、登録時に設定していない場合は『ゲストログインさん』と表示。
　 v-if で認証状態を判別してユーザー名を表示させています。

・マイページから投稿した本の内容を振り返れます。

![マイページ.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/84bafa9e-1827-3ca6-d560-3e54251e70c8.gif)

```Profile.vue
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <p v-if="getStateUserName">こんにちは！
          {{ getStateUserName }}さん
          </p>
          <p v-else>こんにちは！ゲストユーザーさん</p>
          <p>
            <v-btn
              color="orange lighten-1"
              to="/search"
            >
            本を投稿する
            </v-btn>
          </p>
          <p>
            <v-btn
              color="error"
              class="delete-btn"
              @click="deleteUser"
            >
            アカウントを削除
            </v-btn>
          </p>
          <v-col
            cols="12"
            sm="6"
            md="6"
            v-for="(book, index) in books"
            :key="index"
          >
          <!-- 自分が投稿した本の一覧 -->
          <!-- 投稿した本のuseIdとログイン中のuserIdが同じのを表示 -->
          <v-card  v-if="book.userId === $store.state.userId" class="mb-8">
            <v-row>
              <v-col cols="3">
                <!-- 画像が表示される -->
                <v-img :src="book.image"></v-img>
              </v-col>
              <v-col cols="9">
                <v-card-title >{{ book.title }}</v-card-title>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <!-- 書き込み -->
                  <v-btn
                    :to="{name: 'BookEdit', params: {id: index}}"
                    color="primary"
                    class="mx-1"
                  >
                  編集する
                  </v-btn>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="error"
                    @click="deliteLocalStorage(index)"
                  >
                  削除
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>

const STORAGE_KEY = 'books'

export default {
  props: {
    books: Array,
  },
  name: 'Profile',
  data() {
    return {
      user: this.$store.getters.getStateUser,
      userName: ''
    }
  },
  methods: {
    deleteUser() {
      this.$store.dispatch("userDelete");
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAGE_KEY, parsed);
    },
    deliteLocalStorage(index) {
      const isDeleted = 'データを削除してもいいですか？'
      if(window.confirm(isDeleted)) {

        this.books.splice(index, 1)
        this.saveBooks();
        this.books = []
        window.location.reload()
      }
    },
  },
  computed: {
    getStateUser() {
      return this.$store.getters.getStateUser;
    },
    getStateUserName() {
      return this.$store.getters.getUserName;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
}

</script>
```

## 苦労した点

### vuex

認証状態の判別に vuex を使用しましたが、コンポーネントから store にデータを格納して、ログインやログアウトの状態判別で削除ボタンの表示、非表示を実装するのにググったり、Qiita やメンターに相談して解決しました。

### データベース設計

アプリ作成時に ER 図やインフラ構成図を意識せず実装したことで、機能を修正するときにテーブル同士の関係性やデータベースを考えたりと効率悪くなってしまったので、データベース設計の重要さを理解することができました。

### 3. ポートフォリオの課題

・LocalStorage へ保存しているデータを firebase に移行。
（一時的にデータを保存する場合は localStorage が適してるが、データの保存先としては同期処理のため大きなデータを扱うと処理が止まる）

・いいね機能、ソート機能を用いていいね数が多い本を表示
~~・デバイスによってサイドナビゲーションが予期せぬ表示をする~~（2021 年 5 月 23 日、修正)
・ユーザーが投稿した本を検索する機能

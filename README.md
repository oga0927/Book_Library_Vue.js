![トップページ.jpg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/1b7f1a91-49c0-c6a5-4656-5b181e27a81f.jpeg)

# 制作背景

サービスの概要は、読書した内容を 1 ページにまとめるシンプルな「読書管理アプリ」です。想定しているユーザーとしては、本の内容を紙１ページに要約する習慣のある人を想定しています。紙だと編集ができず作り直す手間がかかるので、紙ではなく WEB 上で投稿・管理し、他のユーザーと知識を共有し合えるサービスを制作しました。
解決したい課題として、「他のユーザーがどんなふうに本を要約しているのかを見たい」という欲求の解決を目指してつくりました。
また、同じ本を要約することに時間をかけずに、まだ要約されていない書籍に専念することができます。
<br>
<br>

## URL

- URL: https://shalibo.netlify.app
- ゲストログインボタンで簡単にログインできます。

![スクリーンショット 2021-07-04 11.44.48.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/6bfe5771-ce2b-5101-44f7-84b12006e42a.png)

Qiita に詳細を執筆しております。
[Vue.js、FireBase で読書管理アプリを作ってみた](https://qiita.com/oga0927/items/abf48b692b11fec6ae36)
<br>
<br>

## ER 図

![Untitled Diagram (1).png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/646313e3-2a27-62f9-7063-3b13a03757d1.png)
<br>
<br>
<br>

## インフラ構成図

![インフラ構成図.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/cb5c036e-398e-7e77-22f4-296a0b16c2da.png)
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
- DB: Firebase( Authentication、Realtime Database )

<br>
<br>

## 機能一覧

|      | 　　　　　　 機能　 　　　　 　　 |
| :--- | :-------------------------------- |
| １   | アカウント登録機能 　             |
| ２   | アカウント削除機能 　             |
| ３   | ログイン機能 　　　　　　         |
| ４   | ゲストユーザーログイン機能 　　   |
| ５   | ログアウト機能　　　　　　　　    |
| ６   | 本の検索機能 　                   |
| ７   | 本の追加機能(CRUD) 　             |
| ８   | 投稿内容更新機能(CRUD)            |
| ９   | 投稿内容削除機能(CRUD)            |
| １０ | コメント機能(Ajax) 　             |
| １１ | 本の詳細一覧機能 　               |
| １２ | マイページ機能                    |

<br>
<br>
<br>

# 何ができるのか

### 1. トップページ

![スクリーンショット 2021-07-04 16.09.57.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/1148695b-8c81-4c71-1049-bc5f72432d63.png)

- 最初にトップページへアクセスすると画面が描画されます。
- ヘッダーにログイン、ユーザー登録を配置して、router-link でフォームを描画しています。
- ヘッダーのロゴ（SHALIBO）を押すとトップページへリダイレクト。
  <br>
  <br>
  <br>

### 2. ユーザー認証

- アカウント登録済みの場合はフォームに Email と Password を入力してログイン。
- v-if で認証状態を判別し、『おすすめの一冊を投稿ボタン』を表示させています。
  <br>
  <br>

![ログイン.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/65ac92af-c074-c383-fccf-460f8a699eed.gif)
<br>
<br>

```s

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    user: null,
    userName: '',
    isAuthenticated: false,
  },
  // stateを更新する関数が書かれる場所
  mutations: { //第一引数には必ずstateを書く
    setUser(state, payload) {
      state.user = payload;
    },
    onAuthStateChanged(state, user) {
      //firebaseが返したユーザー情報
      state.user = user;
    },
    onUserStatusChanged(state, status) {
      //ログインしてるかどうか true or false
      state.status = status;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setUserName(state, payload) {
      state.userName = payload;
      console.log(state.userName);
    },
  },
  // 非同期処理の開始
  actions: {
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(result => {
          commit('setUserName', result.user.displayName)
          commit('setUserId', result.user.uid)
          commit('setIsAuthenticated', true);
          // ログインしたら投稿一覧画面
          router.push('/bookindex');
        })
        .catch(() => {
          commit('setIsAuthenticated', false);
          alert('ログインに失敗しました');
          router.push('/login');
        });
    },
  },
});
```

  <br>
  <br>
  <br>

### 3. ユーザー登録

![ユーザー登録.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/5431fcf3-66bd-4d54-5695-d90555c509e5.gif)

- ユーザー登録と同時にユーザー情報を firebase の Authentication に保存しています。<br>
- UserName、Email、Password を入力して登録。<br>
- (ユーザーネームを入力しない場合はゲストログイン名として表示されます)
  <br>
  <br>
  <br>

### 4. 本の投稿

![スクリーンショット 2021-07-04 19.44.09.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/7a361f0d-26fa-f01c-88d8-68364a1482f1.png)

- 投稿ボタンクリックで検索画面にページ遷移
  <br>
  <br>
  <br>

![スクリーンショット 2021-07-04 19.48.16.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/eff56f42-42a4-2f55-db28-ac278b2f8898.png)

- 検索キーワードを入力して検索
- 『 おすすめの一冊を投稿 』ボタンを押すと本の検索画面に遷移します。
- 本のキーワードを入力して検索ボタンを押すと、非同期処理で GoogleBooksAPI からキーワードと一致した本を取得します。
- 最大４０件表示され、検索結果から投稿したい本を選択できます。
  <br>
  <br>
  <br>

![スクリーンショット 2021-07-04 20.08.49.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/4512394a-0343-22cd-58ee-ce93c90a2ede.png)

- firebase の Authentication から userid を取得し、store に格納、state から userid を呼び出し、
  投稿するときに RealtimeDatabase の userid と紐づけて v-for で一覧表示。

<br>
<br>
<br>

![質問内容.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/9b5eb1c0-81fd-ef23-050f-994884bf4cc7.png)

- テンプレートに沿って記述するだけで本が要約され、アウトプットに繋がります。

<br>
<br>
<br>

### 5. 投稿一覧

- 投稿した本は、他のユーザーが書き込めないようにログイン中の userid と RealtimeDatabase の userid と紐づいた本のみ削除と投稿ボタンの表示させています。<br>
- 投稿した本の削除ボタンを押すと、アラートでメッセージが表示され、OK ボタンを押すと RealtimeDatabase から該当する本のデータが削除されます。<br>

![スクリーンショット 2021-07-04 21.26.02.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/53d818a2-c7ce-4ded-855e-1a0e061e613c.png)

<br>
<br>
<br>

### 6. 投稿した本、アカウント削除

![アカウント削除.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/2ce207e3-d8af-073a-1d51-c6a3d4e857a3.gif)

- 投稿した本の一覧を表示。
- 編集ボタンで投稿した本の内容を修正。
- 削除ボタンを押すと LocalStorage に保存されているデータが削除され、トップページ、マイページからも削除されます。
- アカウント削除ボタンをクリックすると、firebase の Authentication から userid が削除されます。
  <br>
  <br>
  <br>

### 7. レスポンシブ対応

![レスポンシブ.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/7768f5de-b014-e41c-6dee-02ea3414ec41.gif)

- Vuetify を使用してスマートフォンからでも使用可能
- デバイスによってハンバーガーメニューを実装
  <br>
  <br>
  <br>

### 8.バリデーション

- E-mail、Password は必須項目<br>
- パスワードは 6 文字以上の入力が必須<br>
- 登録済みのアドレスはアラートでお知らせ

![スクリーンショット 2021-07-04 19.39.20.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/9c4f0f5b-0977-515d-fc7b-95838ad1ea5b.png)

```Vue
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

  <br>
  <br>
  <br>

### 9. 工夫したところ（UI/UX）

① ファーストビューは一眼でわかる画像と、何をするアプリなのかが伝わるように作成。<br>
② 探す → アウトプット → 保存のシンプルな設計。<br>
③ メインビューの配色には暖色をメインに作成。<br>
<br>
<br>
<br>

### 10. 工夫したところ（実装面）

#### ① 発行された ID を snapshot.key で を book の配列に追加

```Vue.js

booksRef.on('child_added', (snapshot) => {

const getData = snapshot.val();
const bookAdd = getData;

bookAdd.id = snapshot.key;
this.books.push(bookAdd);
});
```

<br><br>

#### ② 非同期処理で削除

```Vue.js
//子コンポーネント側(BookIndex)
export default {
  props: {
    books: Array,
  },
}
methods: {
  deleteBook(bookId) {
    booksRef.child(bookId).remove();
   }
  },

//親コンポーネント(App.Vue)
booksRef.on('child_removed', (snapshot) => {
//filterメソッドで削除した本以外を引数のbookに入れ、this.bookに新しい配列として格納
  this.books = this.books.filter((book) => book.id !== snapshot.key)
});
```

<br>
<br>

#### ② マイページでユーザー名の表示、本の編集、削除

- アカウント登録時に設定したユーザー名が表示され、登録時に設定していない場合は『ゲストログインさん』と表示。<br>
- v-if で認証状態を判別してユーザー名を表示させています。<br>
- マイページから投稿した本の内容を振り返れます。

  ![マイページ.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/84bafa9e-1827-3ca6-d560-3e54251e70c8.gif)

```vue
<template>
  <div>
    <p class="login__message" v-if="getStateUserName">
      こんにちは！ {{ getStateUserName }}さん
    </p>
    <p class="login__message" v-else>こんにちは！ゲストユーザーさん！</p>
    <p>
      <v-btn color="orange lighten-1" to="/search"> 本を投稿する </v-btn>
    </p>
    <p>
      <v-btn
        v-if="!isGuestUser"
        color="error"
        class="delete-btn"
        @click="deleteUser"
      >
        アカウントを削除
      </v-btn>
    </p>
    <v-row>
      <v-col cols="12" sm="6" v-for="(book, index) in books" :key="index">
        <!-- 自分が投稿した本の一覧 -->
        <!-- 投稿した本のuseIdとログイン中のuserIdが同じのを表示 -->
        <v-card v-if="book.userId === $store.state.userId" class="mb-8">
          <v-row>
            <v-col cols="5">
              <!-- 画像が表示される -->
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="7">
              <v-card-title>{{ book.title }}</v-card-title>
              <v-spacer></v-spacer>
              <v-card-actions>
                <!-- 書き込み -->
                <v-btn
                  :to="{ name: 'BookEdit', params: { id: index } }"
                  color="primary"
                  class="mx-1"
                >
                  編集する
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="deleteBook(book.id)"> 削除 </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
const booksRef = firebase.database().ref("books");

export default {
  props: {
    books: Array,
  },
  name: "Profile",
  data() {
    return {
      user: this.$store.getters.getStateUser,
      userName: "",
    };
  },
  methods: {
    deleteUser() {
      this.$store.dispatch("userDelete");
    },
    //本の削除
    deleteBook(bookId) {
      booksRef.child(bookId).remove();
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
    },
    isGuestUser() {
      return this.$store.getters.isGuestUser;
    },
  },
};
</script>
```

![トップページ.jpg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/1b7f1a91-49c0-c6a5-4656-5b181e27a81f.jpeg)
<br>
<br>
<br>

## プロジェクト名 SHALIBO

https://shalibo.netlify.app/

Qiita にも執筆しました。
[Vue.js、FireBase で読書管理アプリを作ってみた](https://qiita.com/oga0927/items/abf48b692b11fec6ae36)
<br>
<br>

## 制作背景

読書した内容を知識として定着させたいけど、何をどう書いてアウトプットしていいかわからず、アプリのメモ機能をうまく活かせないことがありました。

ある日、読書術を知ることができたので、メモ機能の代わりに読書術のやり方をテンプレート(質問形式）にしてアウトプットできれば、同じような悩みをもった方の解決になると思い作成しました。
<br>
<br>

## URL

- URL: https://shalibo.netlify.app/
- ユーザー:ゲストログインから簡単にアクセスできます
  <br>
  <br>

## 使用技術

- Vue 2.6.12
- VueRouter
- Vuex 3.6.2
- Vuetify 2.4.7
- JavaScript
- CSS
- GoogleBooksAPI
- WEB サーバー: Netlify
- DB: WebStorage(LocalStorage)
- DB(認証のみ): Firebase(Authentication)
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
| ６   | 本の検索機能(Ajax) 　             |
| ７   | 本の登録機能(CRUD) 　             |
| ８   | 投稿内容編集機能(CRUD)            |
| ９   | コメント機能                      |
| １０ | 本の詳細一覧機能 　               |
| １１ | マイページ機能                    |

<br>
<br>

## ER 図

![Untitled Diagram (1).png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/646313e3-2a27-62f9-7063-3b13a03757d1.png)
<br>
<br>
<br>

## インフラ構成図

![Untitled Diagram (1).png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/8e3abb13-2242-5fa6-5671-cd9bf2b2fa47.png)
<br>
<br>

## テスト用アカウント <br>

UserName: test <br>
E-mail: shalibo@test.com <br>
Password: password<br>
<br>
<br>

## 使い方

<br>

### 1. ユーザー登録

ヘッダーのユーザー登録を押して、フォームに UserName、Email、Password を入力して登録。
(ユーザーネームを入力しない場合はゲストログイン名として表示されます)
<br>
<br>

### 2. ログイン

アカウント登録済みの場合はフォームに Email と Password を入力してログイン。
<br>
<br>

### 3. トップページ

<br>
最初にアクセスするとトップページの画面が描画されます。ヘッダーにログイン、
ユーザー登録を配置して、router-link でフォームを描画しています。
![ログイン.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/37931565-16df-a4f9-4ca1-0fdfa9dfeeaa.gif)
<br>
<br>
<br>

### 4. ユーザー認証

<br>
・ユーザー登録と同時にユーザー情報を firebase の Authentication に保存しています。
・ログインするとヘッダーにホーム、投稿する、マイページ、ログアウトのボタンが表示されます。
・firebase の Authentication から UserId を取得し、store に格納、state から UserId を呼び出し、投稿するときに LocalStorage の UserId と紐づけて v-for で一覧表示。
・トップページでは投稿した本の一覧画面が描画されます。v-if で認証状態を判別し、
『おすすめの一冊を投稿ボタン』を表示させています。

![ユーザー登録.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/ef6d14d2-d6b2-606a-3315-1b4e4b9e0bb1.gif)
<br>
<br>
<br>

### 5. 検索

- 『 おすすめの一冊を投稿 』ボタンを押すと本の検索画面に遷移します。
- 本のキーワードを入力して検索ボタンを押すと、非同期処理で GoogleBookA からキーワードと一致した本を取得します。
- 最大４０件表示され、検索結果から投稿したい本を選択できます。

![検索.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/f5e2f37e-ffcf-6fa8-da38-e85e4f79fe3e.gif)
<br>
<br>
<br>

### 6. 本の投稿

- 本の【＋ボタン】を押すと『読んだ日付』、『この本にはどんな情報が書かれているか』、『自分はこの本から何を学んだか』、『この本がなぜ重要なのか』、『テーマに対しどのような事例を出しているか』、『この本が他の本と似ている所、違う要素は何か』を入力して投稿ボタンを押すと投稿できます。
- 投稿した本は、他のユーザーが書き込めないようにログイン中の UserId と LocalStorage の UserId と紐づいた本のみ削除と投稿ボタンの表示させています。
- 投稿した本の削除ボタンを押すと、アラートでメッセージが表示され、OK ボタンを押すと LocalStorage から該当する本のデータが削除されます。
- ログイン中は LocalStorage の UserId と firebase の UserId と紐づいている本のみ削除ボタンが表示。
- ヘッダーのロゴ（SHALIBO）を押すとトップページへリダイレクト。
  ![投稿.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/493c0af7-936d-5de4-f67c-4e8cfc510bbf.gif)
  <br>
  <br>

### 7. 投稿した本、アカウント削除

- 投稿した本の一覧を表示。
- 編集ボタンで投稿した本の内容を修正。
- 削除ボタンを押すと LocalStorage に保存されているデータが削除され、トップページ、マイページからも削除されます。
- アカウント削除ボタンをクリックすると、firebase の Authentication から UserId が削除されます。

![アカウント削除.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/2ce207e3-d8af-073a-1d51-c6a3d4e857a3.gif)
<br>
<br>

### 8. レスポンシブ対応

- Vuetify を使用してスマートフォンからでも使用可能
- デバイスによってハンバーガーメニューを実装
  <br>
  <br>

### 9. 工夫したところ（機能面）

#### ① フォームにバリデーションを実装

・目のマークをクリックで入力したパスワードを確認。
・登録済みのアドレスはアラートでお知らせ
<br>
<br>

#### ② 質問テンプレートについて

・読んだ本が記憶に残る読書術、読書ビジュアライジング法をアプリに取り入れました。
（本来は質問事項がもっと多い、一部抜粋）
![質問内容.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/9b5eb1c0-81fd-ef23-050f-994884bf4cc7.png)

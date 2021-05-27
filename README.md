![投稿](https://user-images.githubusercontent.com/73045514/116842216-c5a33e80-ac16-11eb-93a6-c3ddc06b8c77.jpg)

## プロジェクト名 SHALIBO

https://shalibo.netlify.app/

Qiita にも執筆しました。
[Vue.js、FireBase で読書管理アプリを作ってみた](https://qiita.com/oga0927/items/abf48b692b11fec6ae36)

## アプリの概要

本の内容が要約されたまとめアプリです。

読書した本をアプリの質問に応じて書くとアウトプットになります。GoogleBookAPI を使って本の検索ができます。マイページで投稿した本の要約を読み返すことができ、
トップページでは他のユーザーが要約して投稿した本を見ることもできます。購入する際の参考や本を持ち歩かなくてもいつでも確認ができます。投稿した本はトップページで表示され、
ログイン中のアカウントと紐づいた本を編集、削除することが可能です。投稿した本の情報を共有することもできます。スマートフォン用にレスポンシブ対応しています。

## 制作背景

購入前に『どんな本か知りたい』、『本の内容をアウトプットしたい』、『要約された本の内容を知りたい』、『読む時間を短縮したい』、『本の内容を振り返りたい』と思った背景から開発しました。

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

## 使用技術

- フロントエンド

  - Vue.js
  - VueRouter
  - Vuex
  - Vuetify

- バックエンド

  - Firebase(Authentication)
  - GoogleBookAPI / WebStorage(LocalStorage)

- サーバー
  - Netlify

## ER 図

![Untitled Diagram (1).png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/646313e3-2a27-62f9-7063-3b13a03757d1.png)

## インフラ構成図

![Untitled Diagram (1).png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/953175/8e3abb13-2242-5fa6-5671-cd9bf2b2fa47.png)

## テスト用アカウント <br>

UserName: test <br>
E-mail: shalibo@test.com <br>
Password: password
ゲストログインから簡単にアクセスできます

## 使い方

- ユーザー登録にアクセスすると、登録画面に切り替わるのでユーザーネーム、e-mail、パスワードを入力して登録ボタンを押します。（ユーザーネームを入力しない場合はゲストログイン名として表示されます）
- 既にアカウントをお持ちの場合は フォームに e-mail とパスワード入力でログインすることができます。
- 『おすすめの一冊を投稿』ボタンを押すと本の検索画面に遷移するので、本のタイトルを入力して検索ボタンを押すと、GoogleBookApi から取得されたキーワードで一致した本が最大４０件表示され、検索結果から投稿したい本を選択できます。
- 検索結果で表示されている本の＋ボタンを押すと『読んだ日付』、『この本にはどんな情報が書かれているか』、『自分はこの本から何を学んだか』、『この本がなぜ重要なのか』、『テーマに対しどのような事例を出しているか』、『この本が他の本と似ている所、違う要素は何か』を入力して投稿ボタンを押すと投稿できます。
- 投稿した本とユーザー id が紐づいており、他のユーザーが書き込めないように投稿リストにはログイン中のユーザー id と紐づいた本のみ削除、投稿ボタンの表示非表示されます。
- 投稿した本の削除ボタンを押すと、アラートでメッセージが表示され、OK ボタンを押すと LocalStorage から該当する本のデータが削除されます。
- ヘッダーのロゴ（SHALIBO）を押すとトップページへリダイレクトされます。

## ライセンス

- GitHub: https://github.com/oga0927/Book_Library_Vue.js
- URL: https://shalibo.netlify.app/

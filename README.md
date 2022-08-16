# pycon.jp.2022

## 概要

PyCon JP 2022イベントの本番サイト用リポジトリです。

## 必要な環境

* Node.js 14系以降
* yarn

## 各種ビルド方法

.env.sampleファイルをコピーして、`.env`ファイルを作成してください。  
必要な情報はSlackでサイト実装の担当者に聞いてください。

```bash
# 依存関係インストール
$ yarn install

# ホットリロードサーバーを「localhost:3000」で起動
$ yarn dev

# プロダクションビルド、サーバー起動
$ yarn build
$ yarn start

# 静的サイト一式を作成
$ yarn generate
```

その他の情報は公式 [ドキュメント](https://nuxtjs.org)を参照ください。

## ブランチ戦略

以下のブランチにマージすると自動的にCloudflare Pagesにデプロイされます

* main
  * 本番環境
* staging
  * ステージング環境
  * 内部メンバーや外部メンバーのレビュー用
* develop
  * 開発担当者の動作確認用

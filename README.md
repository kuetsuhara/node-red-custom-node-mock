# node-red-custom-node-mock
If you make Node-RED custom node, use these base files.

カスタムノード を作るときに基礎となるファイル群をまとめておきました。
これからNode-REDのカスタムノード を作る方は、参考にでもダウンロードしてでも気軽に使ってみてください。

# 使い方
* package.json
* nodes配下
* test配下
* lib配下
を自身のプロジェクトにコピーしてください。

## package.json
node-redの項目と、テストに必要な項目が追加されています。
authorや名称などは適宜書き直してください。

## nodes配下
* baseペア
* base-credentialsペアがあります。

base-credentialsは、保持しておきたい情報や、ID/PASSのようなアカウント情報を保持しておく場合に活用します。
baseペア内にコメントアウトしてある部分を解除すれば、活用可能になります。

## test配下
`node-red-node-test-helper`用のファイルがあります。
基本的なロードのテストは記述してあるので、これをコピーしながら書き進めることができます。
使い方、書き方については本家をご参考ください（https://github.com/node-red/node-red-node-test-helper）

## lib配下
カスタムノード外に処理を書くためのjsファイルが配置されています。
各種nodeにrequireして活用することができます。
# node-red-custom-node-mock
If you make Node-RED custom node, use these base files.

カスタムノード を作るときに基礎となるファイル群をまとめておきました。
これからNode-REDのカスタムノード を作る方は、参考にでもダウンロードしてでも気軽に使ってみてください。

# 使い方
* *package.json
* nodes配下
* test配下
を自身のプロジェクトにコピーしてください。

nodes配下には
* baseペア
* base-credentialsペアがあります。

base-credentialsは、保持しておきたい情報や、ID/PASSのようなアカウント情報を保持しておく場合に活用します。
baseペア内にコメントアウトしてある部分を解除すれば、活用可能になります。

test配下には、`node-red-node-test-helper`用のファイルがあります。
基本的なロードのテストは記述してあるので、これをコピーしながら書き進めることができます。
書き方については本家をご参考ください（https://github.com/node-red/node-red-node-test-helper）

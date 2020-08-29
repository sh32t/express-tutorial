# Expressチュートリアル
## プロジェクト作成
```ps1
npm init -y
```
## Expressのインストール
```ps1
npm install express
```
## JavaScriptファイルの作成
#### `server.js`を作成する。
```js
// Expressのモジュール読み込み
const express = require('express');

// アプリケーションオブジェクトの取得
const app = express();

// GET処理の作成
// 「http://localhost:8080/hello」でアクセスした際に呼び出される。
app.get('/hello', function (req, res) {
    res.send('Hello Express');
});

// サーバーの起動（ポート番号8080を開放）
app.listen(8080, function () {  
    console.log('Server started on port 8080');
});
```
## アプリケーションの実行
```
node server.js
```
#### 下記URLにアクセスして「Hello Express」が表示されることを確認する。

#### [http://localhost:8080/hello](http://localhost:8080/hello)
<br>

#### サーバーを停止するときは`ctrl + c`を実行する。
<br>

## HTMLファイルの表示
#### `index.html`を作成する。
```html
<font color="red">Hello Express</font>
```
#### `server.js`に下記コードを追加して再実行する。
```js
// 「http://localhost:8080/index」でアクセスした際に呼び出される。
app.get('/index', function (req, res) {
    // __dirName = プロジェクトフォルダ直下のパス
    res.sendFile(__dirname + '/index.html');
});
```
#### 下記URLにアクセスして赤字で「Hello Express」が表示されることを確認する。

#### [http://localhost:8080/index](http://localhost:8080/index)


### 参考
#### [Node.js の基礎とそのフレームワーク Express](https://qiita.com/kibinag0/items/8936476e99ed50279b83)
#### [Express 4.x API](https://expressjs.com/ja/4x/api.html)
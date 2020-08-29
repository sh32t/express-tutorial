// Expressのモジュール読み込み
const express = require('express');

// アプリケーションオブジェクトの取得
const app = express();

// GET処理の作成
// 「http://localhost:8080/hello」でアクセスした際に呼び出される。
app.get('/hello', function (req, res) {
    res.send('Hello Express');
});

// 「http://localhost:8080/index」でアクセスした際に呼び出される。
app.get('/index', function (req, res) {
    // __dirName = プロジェクトフォルダ直下のパス
    res.sendFile(__dirname + '/index.html');
});

// サーバーの起動（ポート番号8080を開放）
app.listen(8080, function () {  
    console.log('Server started on port 8080');
});

// HTMLの中から、id="clock" の部品(要素)を取得する
const clock = document.getElementById("clock");

// HTMLの中から、id="timeButton" のボタン部品を取得する
const timeButton = document.getElementById("timeButton");

// HTMLの中から、id="timeMessage" のメッセージ用部品を取得する
const timeMessage = document.getElementById("timeMessage");

// 現在時刻をフォーマットして画面に描画する処理
function showClock() {
  // 現在の日時を取得する
  const now = new Date();
  
  // 現在時刻を「時:分:秒」の日本語形式で表示する
  clock.textContent = now.toLocaleTimeString("ja-JP");
}

// ページをロードしたときに1度目の表示をおこなう
showClock();

// 1000ミリ秒(1秒)ごとに showClock() を繰り返し実行し、時計を動かす
setInterval(showClock, 1000);

// ボタンがクリックされたときの処理(イベントリスナー)を設定する
timeButton.addEventListener("click", function() {
  const now = new Date();
  // timeMessageという段落のテキスト部分を書き換える
  timeMessage.textContent = "ボタンを押した時刻は " + now.toLocaleTimeString("ja-JP") + " です。";
});
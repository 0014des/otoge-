let note = document.getElementById("note");
let hitZone = document.getElementById("hit-zone");
let scoreDisplay = document.getElementById("score");
let score = 0;

let noteY = 0;
let speed = 2;
let gameInterval;

// ノートをリセット
function resetNote() {
  noteY = 0;
  note.style.top = "0px";
}

// ノートを落とすループ
function startGame() {
  resetNote();
  gameInterval = setInterval(() => {
    noteY += speed;
    note.style.top = noteY + "px";

    // ノートが下に行き過ぎたらリセット
    if (noteY > 400) {
      resetNote();
    }
  }, 10);
}

// キー入力でノーツを判定
document.addEventListener("keydown", function(e) {
  if (e.code === "Space") {
    let noteRect = note.getBoundingClientRect();
    let zoneRect = hitZone.getBoundingClientRect();

    let diff = Math.abs(noteRect.bottom - zoneRect.top);

    if (diff < 20) {
      score += 100;
      resetNote();
    } else {
      score -= 50;
    }
    scoreDisplay.textContent = "スコア: " + score;
  }
});

// スタート
startGame();

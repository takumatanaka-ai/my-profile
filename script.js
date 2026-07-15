document.addEventListener('DOMContentLoaded', function () {
  var card = document.getElementById('profileCard');
  if (card) {
    // 初期状態は透明・少し下にオフセット（CSS で定義）
    card.classList.add('fade-in');
  }
});

// 関数: 残り日数を計算し、指定された要素に表示する
function displayCountdown(targetDateStr, elementId) {
    // 指定した日付（targetDateStr）を日付オブジェクトに変換
    const targetDate = new Date(targetDateStr);

    // 現在の日付を取得
    const today = new Date();

    // 試合までの残り日数を計算
    const timeDifference = targetDate - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // 残り日数を指定されたHTML要素に表示
    document.getElementById(elementId).textContent = daysLeft;
}

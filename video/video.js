// var clickCount = 1;
// var actvideoElement = document.getElementById("actvideo");

// // 監聽頁面點擊事件，點擊後播放影片
// document.addEventListener("click", function() {
//     clickCount++;
//     if (clickCount === 1) {
//         playVideo();
//     } else if (clickCount === 2) {
//         // window.location.href = "../web_index/webindex.html";
//     }
// });
// 播放影片的函式
function playVideo() {
    var video = document.getElementById("actvideo");
    var tvvideo = document.getElementById("tvvideo");

    // 如果影片已經播放，則暫停並隱藏它
    if (!video.paused) {
        video.pause();
        video.style.display = "none";
    } else {
        // 否則播放影片
        video.play();
        video.style.display = "block";
    }
    // 隱藏 tvvideo 影片
    tvvideo.style.display = "none";
}
function returnbtn() {
    window.location.href = "../web_index/webindex.html";
}

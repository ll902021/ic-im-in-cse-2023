var clickCount = 0;
var phoneElement = document.getElementById("phone");
var actvideoElement = document.getElementById("actvideo");

// 監聽頁面點擊事件，點擊後播放影片
document.addEventListener("click", function() {
    clickCount++;
    if (clickCount === 1) {
        playVideo();
    } else if (clickCount === 2) {
        window.location.href = "../web_index/webindex.html";
    }
});

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

    // 如果 id 為 "phone" 的元素顯示為 block，則調整影片大小
    if (phoneElement.style.display === "block") {
      adjustVideoSize();
  }
}

// 調整影片大小
function adjustVideoSize() {
  var video = document.getElementById("actvideo");
  var phoneWidth = phoneElement.clientWidth;
  var phoneHeight = phoneElement.clientHeight;

  var videoWidth = video.videoWidth;
  var videoHeight = video.videoHeight;

  var widthRatio = phoneWidth / videoWidth;
  var heightRatio = phoneHeight / videoHeight;

  var scale = Math.min(widthRatio, heightRatio);

  video.style.width = (videoWidth * scale) + "px";
  video.style.height = (videoHeight * scale) + "px";
}
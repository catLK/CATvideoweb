document.addEventListener('DOMContentLoaded', function() {
  // 假设的视频资源数组
  var videoResources = [
    { title: '视频1', src: 'video1.mp4' },
    { title: '视频2', src: 'video2.mp4' },
    { title: '视频3', src: 'video3.mp4' }
  ];
  
  // 动态加载视频资源列表
  var videoList = document.getElementById('videoResources');
  videoResources.forEach(function(resource, index) {
    var listItem = document.createElement('li');
    listItem.textContent = resource.title;
    listItem.onclick = function() {
      loadVideo(resource.src);
    };
    videoList.appendChild(listItem);
  });

  // 加载视频函数
  function loadVideo(src) {
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = src;
    videoPlayer.play();
  }

  // 提交评论
  document.getElementById('submitComment').addEventListener('click', function() {
    var commentBox = document.getElementById('commentBox');
    var commentsList = document.getElementById('commentsList');
    var newComment = document.createElement('div');
    newComment.textContent = commentBox.value;
    newComment.className = 'comment';
    commentsList.appendChild(newComment);
    commentBox.value = ''; // 清空评论框
  });
});

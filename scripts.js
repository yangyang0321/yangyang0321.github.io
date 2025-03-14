// 顯示/隱藏文章詳情
function showDetails(postId) {
    const postDetail = document.getElementById(postId);
    
    // 使用 CSS transition 來實現平滑過渡
    if (postDetail.style.display === "none" || postDetail.style.display === "") {
        postDetail.style.display = "block";
        postDetail.style.maxHeight = "500px"; // 設定最大高度，便於過渡效果
    } else {
        postDetail.style.maxHeight = "0"; // 隱藏時設為 0
        setTimeout(() => {
            postDetail.style.display = "none";
        }, 300); // 延遲讓過渡動畫結束後再隱藏
    }
}

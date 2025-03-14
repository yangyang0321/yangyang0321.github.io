function showDetails(postId) {
    const postDetail = document.getElementById(postId);
    if (postDetail.style.display === "none") {
        postDetail.style.display = "block";
    } else {
        postDetail.style.display = "none";
    }
}

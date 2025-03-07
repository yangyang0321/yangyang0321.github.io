function showPost(postId) {
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const postDetail = document.getElementById('post-detail');

    // 根據不同的文章 ID 顯示相對應的內容
    if (postId === 'post1') {
        postTitle.textContent = '文章標題 1';
        postContent.textContent = '這是文章 1 的詳細內容。';
    } else if (postId === 'post2') {
        postTitle.textContent = '文章標題 2';
        postContent.textContent = '這是文章 2 的詳細內容。';
    } else if (postId === 'post3') {
        postTitle.textContent = '文章標題 3';
        postContent.textContent = '這是文章 3 的詳細內容。';
    }

    // 顯示文章詳細內容區
    postDetail.classList.remove('hidden');
}

function closePost() {
    const postDetail = document.getElementById('post-detail');
    postDetail.classList.add('hidden');
}

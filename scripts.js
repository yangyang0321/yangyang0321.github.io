document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        { title: "我的第一篇文章", content: "這是我的第一篇部落格文章，歡迎閱讀！" },
        { title: "學習JavaScript", content: "今天來分享一些關於JavaScript的學習心得。" }
    ];

    const blogContainer = document.getElementById("blogPosts");
    
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button onclick="alert('感謝閱讀！')">閱讀更多</button>
        `;
        blogContainer.appendChild(postElement);
    });
});

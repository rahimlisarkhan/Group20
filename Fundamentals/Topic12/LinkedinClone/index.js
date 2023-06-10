$(document).ready(function () {
  $("#addPostBtn").on("click", function () {
    let title = $("#postTitle").val();
    let body = $("#postDesc").val().trim();

    let createPostData = {
      title,
      body,
      created: new Date(),
    };

    console.log(createPostData);
    createPost(createPostData);
  });

  getPosts();
});

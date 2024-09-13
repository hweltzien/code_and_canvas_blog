const commentFormHandler = async (event) => {
  
    event.preventDefault();
    const content = document.querySelector("#comment").value.trim();
     const post_id = document.querySelector("#postId").value.trim();
     console.log("post_id", post_id,content);
        const response = await fetch("/api/post/comment", {
        method: "POST",
        body: JSON.stringify({ content, post_id }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log("response", response);
        document.location.reload();
      } else {
        alert("Failed to sign up.");
      }
    };
  
  document
    .querySelector("#commentForm")
    .addEventListener("submit", commentFormHandler);

    //javascript to send update request and delete request//